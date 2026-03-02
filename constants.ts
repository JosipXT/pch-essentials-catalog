import { Product } from './types';

export const CATEGORIES = ["Todos", "Interior", "Exterior", "Electrónica", "Confort", "Protección"];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "40",
    name: "Cobertor Protector para Mascotas",
    category: "Protección",
    price: 12000,
    description: "Viaja con tranquilidad junto a tus mascotas protegiendo la tapicería de tu Geely EX5. Este cobertor de alta resistencia es totalmente impermeable, antideslizante y fácil de limpiar. Su diseño tipo hamaca protege no solo los asientos, sino también los respaldos y las puertas traseras contra pelos, lodo y arañazos.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/d4FrLykQ/cobertor-protector-para-mascotas.jpg" }
    ],
    images: [
      "https://i.ibb.co/d4FrLykQ/cobertor-protector-para-mascotas.jpg",
      "https://i.ibb.co/8LKvvjrg/cobeertor-protector-para-mascotas.jpg"
    ],
    features: [
      "Material impermeable de 4 capas",
      "Ventana de malla para flujo de aire",
      "Anclajes de seguridad para el asiento",
      "Protección lateral para las puertas",
      "Lavable a máquina o con paño húmedo",
      "Ajuste universal para la fila trasera del EX5"
    ]
  },
  {
    id: "22",
    name: "Bandeja Organizadora bajo Asiento",
    category: "Interior",
    price: 12000,
    description: "Utiliza el espacio muerto debajo de los asientos delanteros del EX5. Esta caja de almacenamiento discreta es ideal para guardar objetos de valor, paraguas o herramientas de emergencia, manteniéndolos fuera de la vista pero accesibles.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/0VfY6Wnf/bandeja-asiento.jpg" }
    ],
    images: [
      "https://i.ibb.co/0VfY6Wnf/bandeja-asiento.jpg",
      "https://i.ibb.co/0VfY6Wnf/bandeja-asiento.jpg",
      "https://i.ibb.co/ZRvh6SHn/bandeja-asiento2.jpg"
    ],
    features: ["Diseño deslizable", "Maximiza el espacio interior", "Oculto de la vista exterior", "Construcción robusta"]
  },
  {
    id: "13",
    name: "Protectores Anti-Patadas de Asiento",
    category: "Protección",
    price: 12500,
    description: "Protectores diseñados específicamente para el respaldo de los asientos del Geely EX5. Protegen contra pisadas, suciedad y desgaste causado por pasajeros traseros o niños. Material duradero, elegante y extremadamente fácil de limpiar.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/m5fMvh7h/Whats-App-Image-2026-02-16-at-7-10-51-PM-4.jpg" }
    ],
    images: [
      "https://i.ibb.co/m5fMvh7h/Whats-App-Image-2026-02-16-at-7-10-51-PM-4.jpg",
      "https://i.ibb.co/5WJNWRDf/Whats-App-Image-2026-02-16-at-7-10-53-PM.jpg"
    ],
    features: ["Protección completa del respaldo", "Instalación con corregas invisibles", "Material repelente a líquidos", "Limpieza con paño húmedo", "Fácil instalación"]
  },
  {
    id: "49",
    name: "Cobertor de Volante tipo Gamuza",
    category: "Interior",
    price: 15000,
    description: "Cobertor de volante premium fabricado en material tipo gamuza (Alcantara style). Ofrece un agarre ergonómico superior, máxima comodidad al tacto en cualquier clima y un aspecto deportivo y elegante al interior de tu Geely EX5.",
    colors: [
      { name: "Azul con negro", hex: "#1e40af", available: true, imageUrl: "https://i.ibb.co/mPPXfdN/Azul-con-negro.jpg" },
      { name: "Azul", hex: "#3b82f6", available: true, imageUrl: "https://i.ibb.co/Nd5Dqcj4/Azul.jpg" },
      { name: "Blanco con negro", hex: "#f3f4f6", available: true, imageUrl: "https://i.ibb.co/PncXwK8/Blanco-con-negro.jpg" },
      { name: "Blanco", hex: "#ffffff", available: true, imageUrl: "https://i.ibb.co/99z8dNQy/Blanco.jpg" },
      { name: "Gris con negro", hex: "#4b5563", available: true, imageUrl: "https://i.ibb.co/jv87FPFB/Gris-con-negro.jpg" },
      { name: "Gris", hex: "#9ca3af", available: true, imageUrl: "https://i.ibb.co/Kj0tP90h/Gris.jpg" },
      { name: "Naranja con negro", hex: "#ea580c", available: true, imageUrl: "https://i.ibb.co/VY0fVQ38/Naranja-con-negro.jpg" },
      { name: "Naranja", hex: "#f97316", available: true, imageUrl: "https://i.ibb.co/Y4k6fVN6/Naranja.jpg" },
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/Qv21VHKN/Negro.jpg" }
    ],
    images: [
      "https://i.ibb.co/Qv21VHKN/Negro.jpg",
      "https://i.ibb.co/mPPXfdN/Azul-con-negro.jpg",
      "https://i.ibb.co/PncXwK8/Blanco-con-negro.jpg",
      "https://i.ibb.co/jv87FPFB/Gris-con-negro.jpg",
      "https://i.ibb.co/VY0fVQ38/Naranja-con-negro.jpg"
    ],
    features: [
      "Material tipo Gamuza premium",
      "Antideslizante y transpirable",
      "Ajuste a la medida del Geely EX5",
      "Aspecto deportivo"
    ]
  },
  {
    id: "48",
    name: "Protector TPU General",
    category: "Protección",
    price: 15000,
    description: "Lámina protectora de TPU (Poliuretano Termoplástico) diseñada para proteger superficies vulnerables contra rasguños, impactos ligeros y desgaste diario. Material de alta transparencia que mantiene la estética original de tu vehículo.",
    colors: [
      { name: "Transparente", hex: "#f0f0f0", available: true, imageUrl: "https://i.ibb.co/n8N2KyJx/tpu-general-img.png" }
    ],
    images: [
      "https://i.ibb.co/n8N2KyJx/tpu-general-img.png"
    ],
    features: [
      "Material TPU de alta calidad",
      "Transparente e invisible",
      "Protección contra roces y arañazos",
      "Fácil instalación"
    ]
  },
  {
    id: "21",
    name: "Protector de Consola Central",
    category: "Interior",
    price: 15000,
    description: "Protector de alta calidad para la consola central del Geely EX5. Diseñado para proteger la superficie original contra rayones, huellas y desgaste diario. Su material suave al tacto y ajuste preciso mantienen la estética minimalista del interior mientras brindan una capa adicional de durabilidad.",
    colors: [
      { name: "Azul", hex: "#1e40af", available: true, imageUrl: "https://i.ibb.co/sdXc2Jv6/protector-consola-azul-1-1.jpg" },
      { name: "Blanco", hex: "#ffffff", available: true, imageUrl: "https://i.ibb.co/LhBCPQCv/protector-consola-blanco-1-1.jpg" }
    ],
    images: [
      "https://i.ibb.co/sdXc2Jv6/protector-consola-azul-1-1.jpg",
      "https://i.ibb.co/LhBCPQCv/protector-consola-blanco-1-1.jpg"
    ],
    features: ["Ajuste milimétrico a la consola EX5", "Material antideslizante y suave", "Fácil de limpiar y lavar", "Instalación instantánea sin adhesivos"]
  },
  {
    id: "7",
    name: "Cobertor de Volante Premium",
    category: "Interior",
    price: 15000,
    description: "Cobertor de volante de alta calidad diseñado específicamente para el Geely EX5. Ofrece un agarre superior, protege el material original del volante y añade un toque refinado y elegante al interior. Material transpirable y antideslizante.",
    colors: [
      { name: "Azul Negro", hex: "#1e40af", available: true, imageUrl: "https://i.ibb.co/Rpdv55nw/Azul-Negro.jpg" },
      { name: "Azul", hex: "#3b82f6", available: true, imageUrl: "https://i.ibb.co/fV3NmCNS/Azul.jpg" },
      { name: "Beige", hex: "#d6d3d1", available: true, imageUrl: "https://i.ibb.co/p6ZjJzgR/Beige.jpg" },
      { name: "Blanco Negro", hex: "#ffffff", available: true, imageUrl: "https://i.ibb.co/qMx6FzsS/Blanco-Negro.jpg" },
      { name: "Gris", hex: "#4b5563", available: true, imageUrl: "https://i.ibb.co/fzYf3Nvm/Gris.jpg" },
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/9knfjDxX/Negro.jpg" },
      { name: "Rojo Negro", hex: "#ef4444", available: true, imageUrl: "https://i.ibb.co/t9KkJ1Y/Rojo-Negro.jpg" },
      { name: "Rojo Negro Estilo 2", hex: "#991b1b", available: true, imageUrl: "https://i.ibb.co/d4YmD9Kp/Rojo-Negro2.jpg" }
    ],
    images: [
      "https://i.ibb.co/Rpdv55nw/Azul-Negro.jpg",
      "https://i.ibb.co/fV3NmCNS/Azul.jpg",
      "https://i.ibb.co/p6ZjJzgR/Beige.jpg",
      "https://i.ibb.co/qMx6FzsS/Blanco-Negro.jpg",
      "https://i.ibb.co/fzYf3Nvm/Gris.jpg",
      "https://i.ibb.co/9knfjDxX/Negro.jpg",
      "https://i.ibb.co/t9KkJ1Y/Rojo-Negro.jpg",
      "https://i.ibb.co/d4YmD9Kp/Rojo-Negro2.jpg"
    ],
    features: ["Antideslizante", "Ajuste Universal EX5", "Fácil instalación", "Tacto Premium"]
  },
  {
    id: "26",
    name: "Bandeja Organizadora detrás de Pantalla",
    category: "Interior",
    price: 17000,
    description: "Aprovecha el espacio oculto detrás de la gran pantalla de 15.4\" de tu EX5. Esta bandeja proporciona un lugar discreto y seguro para colocar lentes, pañuelos o pequeños objetos, manteniendo el tablero despejado y organizado sin obstruir la visibilidad.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/xKnKzzpw/bandeja-pantalla1.jpg" }
    ],
    images: [
      "https://i.ibb.co/xKnKzzpw/bandeja-pantalla1.jpg",
      "https://i.ibb.co/DPXB1DVq/bandeja-pantalla2.jpg"
    ],
    features: ["Ajuste perfecto tras la pantalla central", "Superficie antideslizante", "Material ABS de alta calidad", "No requiere adhesivos"]
  },
  {
    id: "20",
    name: "Juego de Loderas Premium (Mudguards)",
    category: "Exterior",
    price: 18000,
    description: "Juego de 4 loderas diseñadas a medida para la carrocería del Geely EX5. Protegen la pintura de los costados contra el impacto de piedras, lodo y asfalto, manteniendo el vehículo limpio por más tiempo y evitando rayones en la parte inferior.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/k77LVCP/Whats-App-Image-2026-02-16-at-7-10-52-PM-3.jpg" }
    ],
    images: [
      "https://i.ibb.co/k77LVCP/Whats-App-Image-2026-02-16-at-7-10-52-PM-3.jpg"
    ],
    features: ["Plástico ABS flexible de alta resistencia", "Incluye tornillería de acero", "Ajuste exacto al contorno del EX5", "Protección contra corrosión por lodo"]
  },
  {
    id: "39",
    name: "Cobertor de Almacenamiento Lateral del Maletero",
    category: "Interior",
    price: 20000,
    description: "Maximiza la organización de tu Geely EX5 con estos cobertores diseñados específicamente para los compartimentos laterales del maletero. Permiten cerrar y ocultar los espacios de almacenamiento laterales, manteniendo tus pertenencias seguras, fuera de la vista y evitando que se desplacen por el área de carga.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/pBJbb1qR/cobertor-almacenamiento-lateral-cajuela.jpg" }
    ],
    images: [
      "https://i.ibb.co/pBJbb1qR/cobertor-almacenamiento-lateral-cajuela.jpg"
    ],
    features: [
      "Ajuste preciso a los huecos laterales del EX5",
      "Material texturizado tipo equipo original (OEM)",
      "Instalación sencilla por presión",
      "Mantiene la estética limpia del maletero",
      "Protección contra miradas externas"
    ]
  },
  {
    id: "36",
    name: "Protector de Pantalla HUD",
    category: "Protección",
    price: 20000,
    description: "Protege la unidad de proyección HUD integrada de tu Geely EX5 con este accesorio diseñado a medida. Este protector actúa como un escudo térmico y físico, evitando que la luz solar directa dañe los componentes ópticos del sistema Head-Up Display y manteniéndolo libre de polvo. Su diseño se integra perfectamente en la cavidad del tablero original.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/G41ZCYTH/hud1.jpg" },
      { name: "Azul", hex: "#1e40af", available: true, imageUrl: "https://i.ibb.co/67487KCk/hud2.jpg" }
    ],
    images: [
      "https://i.ibb.co/G41ZCYTH/hud1.jpg",
      "https://i.ibb.co/67487KCk/hud2.jpg"
    ],
    features: [
      "Protección contra rayos UV y calor extremo",
      "Evita el deslumbramiento y reflejos en el HUD",
      "Material ABS de alta resistencia térmica",
      "Ajuste preciso a la cavidad original del EX5",
      "Instalación instantánea sin herramientas"
    ]
  },
  {
    id: "31",
    name: "Escobillas Limpiaparabrisas (1:1)",
    category: "Exterior",
    price: 20000,
    description: "Juego de escobillas limpiaparabrisas con diseño 1:1 idéntico al original del Geely EX5. Una excelente alternativa que ofrece un ajuste perfecto a los brazos del limpiaparabrisas y un rendimiento de limpieza eficiente y aerodinámico.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/qM25cRBq/wiper-1-1-a.jpg" }
    ],
    images: [
      "https://i.ibb.co/qM25cRBq/wiper-1-1-a.jpg",
      "https://i.ibb.co/jvhDq6fL/wiper-1-1-b.jpg",
      "https://i.ibb.co/PGQP94rb/wiper-1-1-c.jpg"
    ],
    features: ["Diseño réplica 1:1 (OEM Style)", "Ajuste específico EX5", "Goma de alta calidad", "Instalación sencilla"]
  },
  {
    id: "14",
    name: "Bandeja Porta-Vasos de Consola",
    category: "Interior",
    price: 22500,
    description: "Bandeja organizadora para la consola central del Geely EX5. Diseñada para proporcionar un soporte estable para bebidas y espacio adicional para objetos pequeños. Se integra perfectamente con el diseño minimalista del vehículo.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/0yMHDns9/bandeja-negro.jpg" },
      { name: "Blanco", hex: "#ffffff", available: true, imageUrl: "https://i.ibb.co/KpQ1btx8/bandeja-blanco.jpg" }
    ],
    images: [
      "https://i.ibb.co/0yMHDns9/bandeja-negro.jpg",
      "https://i.ibb.co/KpQ1btx8/bandeja-blanco.jpg"
    ],
    features: ["Doble porta-vasos", "Espacio para monedas/llaves", "Plástico ABS de alta resistencia", "Instalación sin herramientas"]
  },
  {
    id: "44",
    name: "Adaptador V2L 16A (Conector Directo)",
    category: "Electrónica",
    price: 25000,
    description: "Conector compacto V2L de 16 amperios diseñado para el Geely EX5 en acabado negro. Este adaptador convierte el puerto de carga de tu vehículo en una toma de corriente AC estándar de alta capacidad. Su diseño robusto y minimalista es perfecto para llevar en la guantera y utilizarlo en cualquier momento para conectar herramientas, luces o cargadores externos.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/VYY12gXp/v2l-adaptador-1.jpg" }
    ],
    images: [
      "https://i.ibb.co/VYY12gXp/v2l-adaptador-1.jpg",
      "https://i.ibb.co/8n11yb69/v2l-adaptador-2.jpg"
    ],
    features: [
      "Capacidad de salida de 16 Amperios",
      "Conector de alta resistencia",
      "Diseño ultra compacto 'Plug & Play'",
      "Compatible con puerto CCS2 del EX5",
      "Ideal para alimentar dispositivos de alta potencia"
    ]
  },
  {
    id: "25",
    name: "Combo de Bandejas: Pantalla + Consola Central",
    category: "Interior",
    price: 25000,
    description: "El kit de organización definitivo para tu Geely EX5. Este combo incluye la bandeja discreta para colocar detrás de la pantalla central de 15.4\" y el organizador divisor para la consola central. Maximiza el espacio y mantén tus pertenencias ordenadas y al alcance de la mano.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/9mX70nLz/bandeja-consola.jpg" }
    ],
    images: [
      "https://i.ibb.co/9mX70nLz/bandeja-consola.jpg",
      "https://i.ibb.co/xKnKzzpw/bandeja-pantalla1.jpg",
      "https://i.ibb.co/DPXB1DVq/bandeja-pantalla2.jpg"
    ],
    features: [
      "Incluye 2 organizadores: Pantalla + Consola",
      "Ajuste perfecto a medida del EX5",
      "Material ABS de alta resistencia",
      "Superficies antideslizantes",
      "Instalación instantánea sin herramientas"
    ]
  },
  {
    id: "17",
    name: "Estribos Laterales Original Style",
    category: "Exterior",
    price: 25000,
    description: "Juego de estribos laterales diseñados para integrarse perfectamente con la línea del Geely EX5. Facilitan el acceso al vehículo, protegen los laterales contra golpes y añaden una presencia más robusta y premium. Incluyen superficie antideslizante.",
    colors: [
      { name: "Estribos Afuera", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/TM1X9SYM/estribos.jpg", price: 25000 },
      { name: "Estribos Adentro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/NdxCkZmb/estribos2.jpg", price: 35000 },
      { name: "Combo (Ambos)", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/TM1X9SYM/estribos.jpg", price: 55000 }
    ],
    images: [
      "https://i.ibb.co/TM1X9SYM/estribos.jpg",
      "https://i.ibb.co/NdxCkZmb/estribos2.jpg"
    ],
    features: ["Facilita el acceso", "Protección lateral", "Superficie antideslizante", "Instalación en puntos originales"]
  },
  {
    id: "38",
    name: "Malla Protectora Anti-Insectos",
    category: "Protección",
    price: 30000,
    description: "Protege el radiador y los componentes internos de tu Geely EX5 con esta malla fina diseñada específicamente para la toma de aire frontal. Evita que insectos, hojas y piedras pequeñas dañen los sistemas de enfriamiento, manteniendo el flujo de aire óptimo y la limpieza del motor.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/nNYTvWW8/antiinsecto2.jpg" }
    ],
    images: [
      "https://i.ibb.co/nNYTvWW8/antiinsecto2.jpg",
      "https://i.ibb.co/HTP0ZZLh/antiinsecto1.jpg",
      "https://i.ibb.co/VcCvD2kj/antiinsecto3.jpg"
    ],
    features: [
      "Malla de acero inoxidable de alta densidad",
      "Protección contra escombros y fauna",
      "Diseño invisible tras la parrilla original",
      "No afecta la eficiencia de enfriamiento",
      "Ajuste a medida para Geely EX5"
    ]
  },
  {
    id: "42",
    name: "Adaptador Regleta V2L 16A (Vehicle-to-Load)",
    category: "Electrónica",
    price: 47500,
    description: "Transforma tu Geely EX5 en una fuente de energía móvil de 16 Amperios con esta regleta V2L. Conéctala al puerto de carga de tu vehículo para disponer de múltiples tomas de corriente AC estándar, permitiéndote alimentar simultáneamente electrodomésticos, laptops, luces o equipos de camping. Imprescindible para un estilo de vida activo y emergencias.",
    colors: [
      { name: "Blanco", hex: "#ffffff", available: true, imageUrl: "https://i.ibb.co/FqCshpmy/regleta1.jpg" }
    ],
    images: [
      "https://i.ibb.co/FqCshpmy/regleta1.jpg"
    ],
    extraImages: [
      "https://i.ibb.co/VpkYVBs2/regleta-visual.jpg"
    ],
    features: [
      "Tecnología Vehicle-to-Load (V2L) de 16A",
      "Múltiples tomas de corriente alterna (AC)",
      "Protección contra sobrecargas integrada",
      "Fácil conexión al puerto de carga del EX5",
      "Ideal para estilo de vida outdoor y camping"
    ]
  },
  {
    id: "18",
    name: "Forro de Maletero Premium",
    category: "Protección",
    price: 55000,
    description: "Protección integral para el área de carga del Geely EX5. Este forro de cuero sintético de alta resistencia protege no solo el piso, sino también los laterales y el respaldo de los asientos traseros. Diseño elegante con costuras decorativas que elevan el aspecto del maletero.",
    colors: [
      { name: "Blanco", hex: "#f3f4f6", available: true, imageUrl: "https://i.ibb.co/4RdrcBXS/forro-maletero-blanco.jpg" },
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/QF1LM3Fq/forro-maletero-negro.jpg" },
      { name: "Azul", hex: "#1e40af", available: true, imageUrl: "https://i.ibb.co/jPGkJr2w/forro-maletero-azul.jpg" }
    ],
    images: [
      "https://i.ibb.co/4RdrcBXS/forro-maletero-blanco.jpg",
      "https://i.ibb.co/QF1LM3Fq/forro-maletero-negro.jpg",
      "https://i.ibb.co/jPGkJr2w/forro-maletero-azul.jpg"
    ],
    extraImages: [
      "https://i.ibb.co/PzC0B0v7/FOTO-FORRO-NUEVA.jpg"
    ],
    features: ["Protección 360° del maletero", "Cuero sintético de fácil limpieza", "Resistente a rayones y líquidos", "Ajuste perfecto por modelo"]
  },
  {
    id: "16",
    name: "Cubre Maletero Retráctil Ajustable",
    category: "Protección",
    price: 60000,
    description: "Cubre objetos retráctil diseñado a medida para el Geely EX5. Disponible en tres acabados premium para adaptarse a tu estilo. Elige entre Lona reforzada, Cuero sintético o Estilo Fibra de Carbón. Protege tu equipaje de la vista y de los rayos UV.",
    colors: [
      { name: "Lona (Canvas)", hex: "#1a1a1a", available: true, imageUrl: "https://i.ibb.co/tPCmdG7w/cubre-maletero-black-canvas.jpg", price: 60000 },
      { name: "Cuero (Leather)", hex: "#0d0d0d", available: true, imageUrl: "https://i.ibb.co/jZ1gjf6V/cubre-maletero-black-leather.jpg", price: 60000 },
      { name: "Fibra de Carbón", hex: "#222222", available: true, imageUrl: "https://i.ibb.co/KcL6Hnb1/cubre-maletero-carbon-fiber-leather.jpg", price: 57500 }
    ],
    images: [
      "https://i.ibb.co/tPCmdG7w/cubre-maletero-black-canvas.jpg",
      "https://i.ibb.co/jZ1gjf6V/cubre-maletero-black-leather.jpg",
      "https://i.ibb.co/KcL6Hnb1/cubre-maletero-carbon-fiber-leather.jpg"
    ],
    extraImages: [
      "https://i.ibb.co/9Hx4XFss/cubre1.jpg",
      "https://i.ibb.co/CKKGqpnK/cubre2.jpg",
      "https://i.ibb.co/PsQBxMfz/cubre3.jpg",
      "https://i.ibb.co/SDqd1Jjx/cubre4.jpg"
    ],
    features: ["Disponible en 3 materiales", "Instalación Plug & Play", "Retráctil y desmontable", "Protección visual y solar"]
  },
  {
    id: "43",
    name: "Sistema de Iluminación LED para Maletero",
    category: "Electrónica",
    price: 0,
    isSpecialShipping: true,
    isComingSoon: true,
    description: "Mejora drásticamente la visibilidad en el área de carga de tu Geely EX5 con este sistema de iluminación LED premium. Disponible en dos tonos: Blanco Frío (Luz Blanca) o Blanco Cálido (Luz Amarilla). Puede configurarse para cubrir media cajuela o la cajuela completa. Debido a estas variaciones, este producto requiere una cotización directa para confirmar el precio final según tu preferencia de tamaño y color.",
    colors: [
      { name: "Luz Blanca", hex: "#ffffff", available: true, imageUrl: "https://i.ibb.co/spKJ1BGS/luces-maletero-1.jpg" },
      { name: "Luz Amarilla", hex: "#fef3c7", available: true, imageUrl: "https://i.ibb.co/vRkHnbj/luces-maletero-2.jpg" }
    ],
    images: [
      "https://i.ibb.co/spKJ1BGS/luces-maletero-1.jpg",
      "https://i.ibb.co/vRkHnbj/luces-maletero-2.jpg"
    ],
    features: [
      "Disponible en Luz Blanca o Luz Amarilla",
      "Opciones para Media o Cajuela Completa",
      "Diseño integrado tipo original (OEM Look)",
      "Encendido automático al abrir el maletero",
      "Envío especial / Cotización personalizada vía WhatsApp"
    ]
  },
  {
    id: "34",
    name: "Pistones de Maletero Reforzados",
    category: "Protección",
    price: 0,
    isComingSoon: true,
    description: "Juego de pistones (amortiguadores) reforzados para el maletero del Geely EX5. Diseñados para soportar el uso intensivo y garantizar una apertura y cierre suave y seguro del portón trasero. Fabricados con materiales de alta durabilidad con acabado en negro mate.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/chtfKNgQ/pistones1.jpg" }
    ],
    images: [
      "https://i.ibb.co/chtfKNgQ/pistones1.jpg",
      "https://i.ibb.co/nsQVfDbH/pistones2.jpg"
    ],
    features: ["Apertura suave y controlada", "Construcción en acero reforzado", "Ajuste perfecto para EX5", "Resistente a la corrosión"]
  },
  {
    id: "19",
    name: "Kit de Modificaciones Exteriores Modernas",
    category: "Exterior",
    price: 0,
    isComingSoon: true,
    description: "Eleva la estética de tu Geely EX5 con este kit de modificaciones exteriores premium. Diseñado para acentuar las líneas aerodinámicas del vehículo, proporcionando un aspecto más agresivo y tecnológico. Fabricado en materiales de alta resistencia con acabado negro profundo.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/JwtYXprv/Modificaciones-1-negro.jpg" }
    ],
    images: [
      "https://i.ibb.co/JwtYXprv/Modificaciones-1-negro.jpg",
      "https://i.ibb.co/fd5332fx/Modificaciones-2-negro.jpg"
    ],
    features: ["Acabado Negro Piano brillante", "Diseño aerodinámico funcional", "Material ABS de grado automotriz", "Instalación precisa sobre puntos originales"]
  },
  {
    id: "50",
    name: "Cámara para Grabación Continua",
    category: "Electrónica",
    price: 0,
    isComingSoon: true,
    description: "Cámara de grabación continua (Dashcam) diseñada para integrarse perfectamente al interior del Geely EX5. Registra todos tus viajes en alta resolución brindándote mayor seguridad y evidencia ante cualquier eventualidad, con una instalación estética y sin cables visibles.",
    colors: [
      { name: "Gris/Negro", hex: "#4b5563", available: true, imageUrl: "https://i.ibb.co/yFn6vcbw/Camara-ex5-final-comp.png" }
    ],
    images: [
      "https://i.ibb.co/yFn6vcbw/Camara-ex5-final-comp.png",
      "https://i.ibb.co/5fB2yfX/Camara-Carro-EX5-2.jpg"
    ],
    features: [
      "Grabación en alta resolución",
      "Integración tipo original (OEM Look)",
      "Monitoreo constante de seguridad",
      "Sin cables a la vista"
    ]
  },
  {
    id: "47",
    name: "Juego de Cubre Asientos Estilo Moderno",
    category: "Interior",
    price: 0,
    isSpecialShipping: true,
    description: "Personaliza el interior de tu Geely EX5 con nuestra línea de diseño moderno. Estos cubre asientos destacan por sus colores vibrantes y un diseño dinámico que transforma la cabina. Fabricados con materiales sintéticos de alta resistencia, ofrecen protección total contra el desgaste manteniendo una estética vanguardista y atrevida. Producto de importación bajo pedido.",
    colors: [
      { name: "Azul", hex: "#1e40af", available: true, imageUrl: "https://i.ibb.co/F4CTCR13/cubre-asi-azul.jpg" },
      { name: "Blanco Premium", hex: "#f3f4f6", available: true, imageUrl: "https://i.ibb.co/dJkZnWp2/cubre-asi-blanco.jpg" },
      { name: "Naranja Vibrant", hex: "#f97316", available: true, imageUrl: "https://i.ibb.co/zhK6c4ny/cubre-asi-naranaja.jpg" }
    ],
    images: [
      "https://i.ibb.co/F4CTCR13/cubre-asi-azul.jpg",
      "https://i.ibb.co/dJkZnWp2/cubre-asi-blanco.jpg",
      "https://i.ibb.co/zhK6c4ny/cubre-asi-naranaja.jpg"
    ],
    features: [
      "Diseño ergonómico con acabados vibrantes",
      "Set completo para todas las plazas",
      "Material de alta durabilidad y tacto suave",
      "Compatible con sensores de asiento y airbags",
      "Envío especial / Por encargo"
    ]
  },
  {
    id: "46",
    name: "Protector de Maletero TPE Premium",
    category: "Protección",
    price: 0,
    isSpecialShipping: true,
    description: "Protección total para el área de carga de tu Geely EX5. Este protector está fabricado en TPE (Elastómero Termoplástico) de alta resistencia, un material inodoro, ecológico y extremadamente duradero. Su diseño con bordes elevados está pensado para contener derrames, suciedad y proteger la alfombra original del maletero contra el desgaste diario y objetos pesados.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/rRysVmpJ/TPE-trasero.jpg" }
    ],
    images: [
      "https://i.ibb.co/rRysVmpJ/TPE-trasero.jpg"
    ],
    features: [
      "Material TPE de alta durabilidad",
      "Diseño impermeable y fácil de lavar",
      "Bordes elevados para contener líquidos y suciedad",
      "Ajuste preciso para el maletero del EX5",
      "Inodoro y amigable con el medio ambiente",
      "Envío especial / Por encargo"
    ]
  },
  {
    id: "37",
    name: "Organizador de Maletero Modular",
    category: "Interior",
    price: 0,
    isSpecialShipping: true,
    description: "Optimiza el espacio de carga de tu Geely EX5 con este organizador modular de alta capacidad. Diseñado para mantener tus pertenencias ordenadas, seguras y evitar que se desplacen durante el trayecto. Fabricado en materiales resistentes. Producto por encargo.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/MkSx141B/Organizador-Cajuela.jpg" }
    ],
    images: [
      "https://i.ibb.co/MkSx141B/Organizador-Cajuela.jpg"
    ],
    features: [
      "Diseño modular ajustable",
      "Material de alta durabilidad y fácil limpieza",
      "Base antideslizante",
      "Ideal para compras o equipo deportivo",
      "Envío especial / Por encargo"
    ]
  },
  {
    id: "35",
    name: "Alerón Trasero Premium",
    category: "Exterior",
    price: 0,
    isSpecialShipping: true,
    description: "Eleva la estética de tu Geely EX5 con este alerón trasero de diseño exclusivo. Fabricado con materiales ligeros y de alta resistencia, este accesorio mejora el perfil aerodinámico del vehículo mientras le otorga un aspecto más agresivo y refinado. Producto de importación bajo pedido.",
    colors: [
      { name: "Negro Piano", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/4nPBh1ss/aleron1.jpg" }
    ],
    images: [
      "https://i.ibb.co/4nPBh1ss/aleron1.jpg",
      "https://i.ibb.co/SXm9Fgdt/aleron2.jpg",
      "https://i.ibb.co/HDdTthxv/aleron3.jpg",
      "https://i.ibb.co/KcfQTMQ7/aleron4.jpg",
      "https://i.ibb.co/QZrhRvs/aleron5.jpg"
    ],
    features: [
      "Diseño Aerodinámico refinado",
      "Acabado Negro Piano de alto brillo",
      "Ajuste preciso sobre el portón original",
      "Producto por encargo / Envío especial"
    ]
  },
  {
    id: "33",
    name: "Luces DRL LED (Circulación Diurna)",
    category: "Exterior",
    price: 0,
    isSpecialShipping: true,
    description: "Juego de luces de circulación diurna (DRL) con tecnología LED. Diseñadas para integrarse en el frontal del Geely EX5, proporcionando una luz blanca brillante que mejora significativamente la visibilidad y la seguridad en carretera, además de aportar una estética moderna y tecnológica.",
    colors: [
      { name: "Luz Blanca", hex: "#ffffff", available: true, imageUrl: "https://i.ibb.co/hFwCbTjd/ldr-5.jpg" }
    ],
    images: [
      "https://i.ibb.co/hFwCbTjd/ldr-5.jpg",
      "https://i.ibb.co/27ytCy47/ldr-6.jpg"
    ],
    features: ["Luz LED Blanca Intensa", "Mejora la visibilidad diurna", "Diseño integrado al parachoques", "Apariencia moderna y tecnológica"]
  },
  {
    id: "32",
    name: "Escobillas Limpiaparabrisas Originales Geely",
    category: "Exterior",
    price: 0,
    isSpecialShipping: true,
    description: "Repuesto genuino de escobillas limpiaparabrisas para Geely EX5. Garantiza la máxima durabilidad, limpieza sin rayas y funcionamiento silencioso certificado por el fabricante. Mantén la visibilidad original de tu vehículo.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/d4rD6QL0/wiper-original-1.jpg" }
    ],
    images: [
      "https://i.ibb.co/d4rD6QL0/wiper-original-1.jpg",
      "https://i.ibb.co/2YCs4R1F/wiper-original-2.jpg"
    ],
    features: ["Repuesto Genuino Geely", "Máxima vida útil", "Limpieza silenciosa", "Ajuste de fábrica"]
  },
  {
    id: "30",
    name: "Juego Completo de Cubre Asientos Premium",
    category: "Interior",
    price: 0,
    isSpecialShipping: true,
    description: "Protege la tapicería original de tu Geely EX5 con este juego completo de cubre asientos de alta gama. Diseñados a medida para un ajuste perfecto que parece de fábrica. Fabricados en materiales transpirables y duraderos de alta calidad. Al ser un producto de importación a medida, requiere cotización de envío especial.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/hxVxP6CC/cubre-asientos-negro.jpg" },
      { name: "Azul", hex: "#1e40af", available: true, imageUrl: "https://i.ibb.co/h1BjmfgC/cubre-asientos-azul.jpg" }
    ],
    images: [
      "https://i.ibb.co/hxVxP6CC/cubre-asientos-negro.jpg",
      "https://i.ibb.co/h1BjmfgC/cubre-asientos-azul.jpg"
    ],
    features: [
      "Set completo para todas las plazas",
      "Compatible con Airbags laterales",
      "Material acolchado confort",
      "Diseño a medida para Geely EX5",
      "Envío especial / Por encargo"
    ]
  },
  {
    id: "15",
    name: "Juego de Bota-Aguas Premium",
    category: "Exterior",
    price: 0,
    isSpecialShipping: true,
    description: "Deflectores de ventana diseñados a medida para el Geely EX5. Permiten circular con las ventanas ligeramente abiertas durante la lluvia, evitando el empañamiento y mejorando la circulación del aire. Acabado negro brillante que complementa la estética del vehículo.",
    colors: [
      { name: "Negro", hex: "#000000", available: true, imageUrl: "https://i.ibb.co/YFnrymz1/bota-aguas-1-negro.jpg" }
    ],
    images: [
      "https://i.ibb.co/YFnrymz1/bota-aguas-1-negro.jpg",
      "https://i.ibb.co/HfnngNf2/bota-aguas-2-negro.jpg"
    ],
    features: ["Instalación con adhesivo 3M industrial", "Material acrílico de alta resistencia", "Diseño aerodinámico", "Protección contra lluvia y sol"]
  }
];