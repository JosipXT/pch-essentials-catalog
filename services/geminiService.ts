import { GoogleGenAI } from "@google/genai";
import { MOCK_PRODUCTS } from "../constants";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Vehicle Technical Data from PDF
const VEHICLE_SPECS = `
DATOS TÉCNICOS DEL GEELY EX5:
- Dimensiones: Largo 4615mm, Ancho 1901mm, Alto 1670mm. Distancia entre ejes 2750mm.
- Motor: Eléctrico de imán sincrónico permanente. Potencia 160kW (215 HP aprox), Torque 320Nm.
- Batería: Fosfato de hierro-litio (LFP) de 60.22 kWh.
- Autonomía: 480 km (NEDC) / 425 km (WLTP).
- Carga: DC (30-80% en ~28 min, máx 100kW). AC (11kW). Conector CCS2.
- Rodaje: Llantas 225/55R18 (Versión GT) o 235/50R19 (Versión GT+ Sport). Aros de lujo.
- Interior: Pantalla táctil de 15.4 pulgadas, Panel instrumentos digital 10.2 pulgadas, Cargador inalámbrico, Sonido inmersivo (hasta 16 parlantes).
- Exterior: Techo panorámico, Rieles de techo, Puerta trasera eléctrica, Manillas retráctiles.
- Seguridad: ADAS completo, Cámara 360 grados, Sensores de presión de llantas.
`;

// Construct a system instruction that includes the catalog data AND vehicle specs
const systemInstruction = `
Eres "Alex", un asistente de ventas experto y entusiasta para una tienda de accesorios del auto modelo "Geely EX5".
Tu objetivo es ayudar a los clientes a encontrar piezas, responder preguntas técnicas sobre el auto y sugerir productos.

CONOCIMIENTO TÉCNICO DEL VEHÍCULO:
${VEHICLE_SPECS}

CATÁLOGO DE ACCESORIOS DISPONIBLES (Inventario):
${JSON.stringify(MOCK_PRODUCTS.map(p => ({
  id: p.id,
  name: p.name,
  category: p.category,
  price: p.price,
  features: p.features,
  colors: p.colors.map(c => c.name).join(", ")
})))}

SERVICIO DE REPUESTOS ORIGINALES:
- Además del inventario mostrado, ofrecemos un servicio de COTIZACIÓN E IMPORTACIÓN DE REPUESTOS ORIGINALES.
- Si un cliente pregunta por una pieza que NO está en el inventario, dile que podemos cotizarla e importarla directamente.
- Invítalos a usar el botón de "Cotizar Pieza Genuina" o contactarnos por WhatsApp para estos casos específicos.

Reglas:
1. Usa el conocimiento técnico del EX5 para justificar tus recomendaciones (ej: "Como el EX5 tiene pantalla de 15.4 pulgadas, este protector le queda perfecto").
2. Si preguntan datos técnicos (autonomía, potencia, medidas), usa la sección de CONOCIMIENTO TÉCNICO.
3. Solo recomienda productos que estén en el inventario para compra inmediata.
4. Si preguntan por algo que NO está, ofrece el servicio de importación de repuestos originales.
5. Sé breve, amable y profesional. Respuestas en Español.
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]) => {
  try {
    const model = 'gemini-3-flash-preview'; 

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Lo siento, tuve un problema al consultar el catálogo. Por favor intenta de nuevo.";
  }
};