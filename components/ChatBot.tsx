import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: '¡Hola! Soy Alex, tu especialista en EX5. ¿Buscas algún accesorio en específico o necesitas ayuda con el catálogo?'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        // Convert chat history to API format
        const history = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        const responseText = await sendMessageToGemini(userMessage.text, history);

        const botMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: responseText || "Lo siento, no pude procesar eso."
        };
        setMessages(prev => [...prev, botMessage]);
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageCircle size={28} />
        <span className="font-medium pr-2 hidden sm:inline">Asistente IA</span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'
        }`}
        style={{ height: 'min(600px, 80vh)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-900 to-brand-700 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Sparkles size={18} className="text-yellow-300" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Asistente EX5</h3>
              <p className="text-xs text-brand-100 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                En línea (Gemini)
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-hide">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-brand-600 text-white rounded-tr-sm'
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-2">
                 <Loader2 size={16} className="animate-spin text-brand-600" />
                 <span className="text-xs text-gray-500">Escribiendo...</span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre piezas..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-brand-600 text-white p-3 rounded-xl hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-2">
            Potenciado por Gemini API. Puede cometer errores.
          </p>
        </form>
      </div>
    </>
  );
};

export default ChatBot;