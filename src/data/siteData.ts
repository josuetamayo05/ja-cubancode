import {
  Bot,
  LayoutDashboard,
  Monitor,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";
import type { SiteData } from "./siteData.types";

/**
 * Todo el contenido del sitio vive aquí.
 * Para añadir un proyecto, copia uno de la lista `projects` y cambia los datos.
 * Las imágenes van en /public/projects y se referencian como "/projects/archivo.jpg".
 */
export const siteData: SiteData = {
  person: {
    name: "Josué Tamayo",
    role: "Desarrollador Full Stack",
    location: "Cuba · trabajo remoto",
    availability: "Disponible para proyectos freelance y empleo",
    photo: { src: "/foto/josue-tamayo.jpg", alt: "Retrato de Josué Tamayo" },
    // email: "tu@correo.com",
    // linkedin: "https://www.linkedin.com/in/...",
    // cvUrl: "/cv/josue-tamayo-cv.pdf",
  },

  brand: {
    name: "JA CubanCode",
    siteUrl: "https://ja-cubancode.vercel.app",
    whatsappNumber: "5350121476",
    whatsappDisplay: "+53 5012 1476",
    instagram: "https://www.instagram.com/jacubancode",
    facebook: "https://www.facebook.com/share/1GbdQ6hftM/",
    github: "https://github.com/josuetamayo05",
  },

  hero: {
    eyebrow: "Disponible para proyectos y empleo",
    headline: "Desarrollo software que los negocios usan todos los días.",
    intro:
      "Soy Josué Tamayo, desarrollador full stack. Construyo aplicaciones web, móviles y de escritorio de principio a fin: desde entender el problema hasta dejar el producto publicado y funcionando.",
    stats: [
      { value: "2+", label: "años desarrollando" },
      { value: "8+", label: "proyectos construidos" },
      { value: "3", label: "plataformas: web, móvil, escritorio" },
    ],
  },

  about: {
    paragraphs: [
      "Soy desarrollador de software, formado en Ciencias de la Computación. Desde hace dos años trabajo como freelance bajo la marca JA CubanCode, creando productos reales para negocios: tiendas online, catálogos, sitios inmobiliarios y aplicaciones de gestión.",
      "Me gusta el trabajo completo: entender cómo funciona el negocio, diseñar la interfaz, modelar los datos y llevarlo a producción. Mi stack principal es React con TypeScript en el frontend, y Python, Node.js, Supabase y Firebase en el backend. También desarrollo apps móviles con Flutter y de escritorio con Python.",
      "Ahora mismo estoy convirtiendo VendeFlex, mi app de gestión para negocios de importación, en un SaaS multiusuario con suscripciones, y ampliando mi trabajo hacia automatizaciones con inteligencia artificial.",
    ],
    facts: [
      { label: "Ubicación", value: "Cuba · remoto" },
      { label: "Formación", value: "Ciencias de la Computación" },
      { label: "Experiencia", value: "2 años · freelance" },
      { label: "Busco", value: "Proyectos y empleo full stack" },
    ],
  },

  skills: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Zustand", "React Router", "Vite", "PWA"],
    },
    {
      title: "Backend y datos",
      items: ["Node.js", "Python", "Supabase", "Firebase", "PostgreSQL", "SQLite", "APIs REST"],
    },
    {
      title: "Móvil y escritorio",
      items: ["Flutter", "Dart", "Riverpod", "Python + Flet", "Tkinter"],
    },
    {
      title: "Herramientas",
      items: ["Git", "GitHub", "Vercel", "Cloudinary", "ESLint", "C#"],
    },
  ],

  projects: [
    {
      slug: "vendeflex",
      title: "VendeFlex",
      kind: "SaaS · PWA",
      category: "app",
      year: "2026",
      status: "En evolución",
      featured: true,
      summary:
        "Aplicación de gestión para negocios de importación y compra local: inventario, ventas, clientes, finanzas e inversiones en una sola app instalable.",
      tech: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Supabase", "PWA"],
      cover: {
        src: "/projects/vendeflex-dashboard.jpg",
        alt: "Dashboard de VendeFlex con caja, patrimonio, ganancia del día y stock",
      },
      gallery: [
        {
          src: "/projects/vendeflex-onboarding.jpg",
          alt: "Pantalla de bienvenida de VendeFlex, paso 1 de 7",
        },
      ],
      liveUrl: "https://vendeflexapp.vercel.app",
      caseStudy: {
        context:
          "Muchos vendedores llevan su negocio de importación en hojas de Excel: compras en varias monedas, envíos que hay que repartir entre productos, ventas fiadas y un margen real que casi nadie conoce con exactitud.",
        solution:
          "VendeFlex convierte ese Excel en una aplicación. Cada compra se registra como una inversión, el costo de envío se reparte automáticamente entre los productos y el punto de venta descuenta stock y calcula la ganancia real de cada venta. El dashboard muestra caja, patrimonio, capital recuperado y ROI en USD, CUP o MLC.",
        highlights: [
          "Punto de venta con carrito, métodos de pago y ventas a crédito",
          "Costo real por producto, con el envío de importación prorrateado",
          "Inversiones con seguimiento de capital recuperado y ROI",
          "Multimoneda (USD, CUP, MLC) con tasa de cambio configurable",
          "Clientes con historial de compras e integración con WhatsApp",
          "Importación desde Excel, copias de seguridad y app instalable (PWA)",
        ],
        role: "Producto completo: idea, diseño de la interfaz, modelo de datos y desarrollo.",
        next: "Evolución a una plataforma multiusuario con cuentas, sincronización en la nube y planes de suscripción.",
      },
    },
    {
      slug: "marianne-houses",
      title: "Marianne Houses",
      client: "Inmobiliaria · La Habana",
      kind: "Web inmobiliaria",
      category: "web",
      summary:
        "Sitio para una inmobiliaria de residencias de alto nivel: catálogo de propiedades en venta y renta, con panel de administración propio.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Cloudinary", "Python"],
      cover: {
        src: "/projects/marianne-houses.jpg",
        alt: "Portada de Marianne Houses: Exclusividad y elegancia en La Habana",
      },
      liveUrl: "https://mariannehouses.com",
      repoUrl: "https://github.com/josuetamayo05/Real-Estate-Project",
      caseStudy: {
        context:
          "La inmobiliaria necesitaba un catálogo propio, con una imagen a la altura de sus propiedades, que su equipo pudiera actualizar sin depender de un programador.",
        solution:
          "Diseñé una web de estética premium y un panel de administración con acceso protegido para crear y editar propiedades. Las imágenes se sirven optimizadas desde Cloudinary y cada propiedad tiene su propia página, lista para compartir y posicionar en buscadores.",
        highlights: [
          "Catálogo con filtros por zona y tipo de operación (venta o renta)",
          "Ficha de propiedad con galería y contacto directo por WhatsApp",
          "Panel de administración con inicio de sesión (Firebase)",
          "Imágenes optimizadas en Cloudinary, con scripts de carga masiva en Python",
          "SEO técnico: metadatos por página, sitemap y robots.txt",
        ],
        role: "Diseño, desarrollo frontend, panel de administración y despliegue.",
      },
    },
    {
      slug: "flower-shop",
      title: "Flower Shop",
      client: "Floristería artesanal · La Habana",
      kind: "E‑commerce",
      category: "web",
      summary:
        "Tienda online para una floristería de ramos artesanales: colecciones, carrito y pedido directo por WhatsApp.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      cover: {
        src: "/projects/flower-shop.jpg",
        alt: "Portada de Flower Shop: Minimalismo floral con esencia natural",
      },
      gallery: [
        {
          src: "/projects/flower-shop-catalogo.jpg",
          alt: "Colecciones destacadas de Flower Shop con botón de pedido por WhatsApp",
        },
      ],
      liveUrl: "https://pflowershop.vercel.app",
      caseStudy: {
        context:
          "Un negocio que vendía principalmente por Instagram necesitaba un catálogo ordenado donde el cliente pudiera elegir, armar su pedido y enviarlo sin fricción.",
        solution:
          "Una tienda con identidad visual propia (tipografía editorial y paleta rosada), colecciones destacadas y un carrito que genera el mensaje de pedido listo para enviar por WhatsApp. Sin pasarela de pago, que es lo que encaja con cómo compra su cliente.",
        highlights: [
          "Colecciones y productos destacados (“Más pedido”)",
          "Página individual por producto, enlazable desde redes",
          "Carrito que arma el pedido y lo envía por WhatsApp",
          "Diseño mobile‑first: la mayoría de las visitas llegan desde el móvil",
        ],
        role: "Diseño y desarrollo completo, sobre una base de e‑commerce reutilizable propia.",
      },
    },
    {
      slug: "sport-shop",
      title: "Sport Shop",
      client: "Tienda de ropa deportiva",
      kind: "E‑commerce",
      category: "web",
      summary:
        "Catálogo de ropa deportiva con carrito, envío a toda Cuba y pago contra entrega coordinado por WhatsApp.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      cover: {
        src: "/projects/sport-shop.jpg",
        alt: "Portada de Sport Shop: Ropa deportiva de calidad premium",
      },
      liveUrl: "https://fut-store.vercel.app",
      caseStudy: {
        context:
          "Una tienda de ropa deportiva quería salir de los mensajes sueltos y tener un catálogo claro que transmitiera confianza para comprar con pago contra entrega.",
        solution:
          "Partí de la misma base de e‑commerce que Flower Shop y la adapté a otra marca: otra identidad visual, otras categorías y otros mensajes, en mucho menos tiempo que un desarrollo desde cero.",
        highlights: [
          "Catálogo por categorías con carrito",
          "Pedido por WhatsApp con el resumen del carrito",
          "Bloques de confianza: envío, calidad, contacto directo y pago flexible",
          "Base reutilizable: un mismo código, varias tiendas",
        ],
        role: "Diseño y desarrollo completo.",
      },
    },
    {
      slug: "agenda-citas",
      title: "Agenda de citas",
      kind: "App móvil",
      category: "app",
      summary:
        "App para profesionales que trabajan con citas: agenda diaria, tipos de servicio, horario laboral y bloqueos recurrentes, con detección de solapamientos.",
      tech: ["Flutter", "Dart", "Riverpod", "Supabase"],
      repoUrl: "https://github.com/josuetamayo05/Flutter-App",
    },
    {
      slug: "bot-trading",
      title: "Bot de alertas de mercado",
      kind: "Automatización",
      category: "software",
      summary:
        "Descarga automática de datos de EUR/USD desde MetaTrader 5, análisis por sesiones, alertas en Telegram y un reporte diario en PDF con gráficas.",
      tech: ["Python", "MetaTrader 5", "SQLite", "Telegram API"],
      repoUrl: "https://github.com/josuetamayo05/Bot-MetaTrader-5",
    },
    {
      slug: "smart-event-planner",
      title: "Smart Event Planner",
      kind: "App de escritorio",
      category: "software",
      summary:
        "Planificador de eventos y recursos para un entorno hospitalario: calendario, validación de restricciones entre recursos y acceso por usuario.",
      tech: ["Python", "Flet"],
      repoUrl: "https://github.com/josuetamayo05/Smart-Event-Planner",
    },
    {
      slug: "instinct-simulator",
      title: "Instinct Simulator",
      kind: "Intérprete y simulación",
      category: "software",
      summary:
        "Intérprete de un lenguaje propio para programar el comportamiento de criaturas y simulador visual de su mundo, con tests automatizados.",
      tech: ["Python", "Tkinter", "unittest"],
      repoUrl: "https://github.com/josuetamayo05/INSTINCT-SIMULATOR",
    },
  ],

  services: [
    {
      slug: "web",
      title: "Webs y tiendas online",
      desc: "Webs corporativas, landing pages, catálogos y tiendas con pedidos por WhatsApp o pago en línea.",
      icon: Monitor,
      details: {
        subtitle:
          "Una web que carga rápido, explica tu oferta en segundos y convierte visitas en mensajes o ventas.",
        features: [
          "Landing pages y webs corporativas",
          "Catálogos y tiendas online con carrito",
          "Pedidos por WhatsApp, formulario o pago en línea",
          "Panel para gestionar productos, propiedades o contenido",
          "Diseño mobile‑first, rendimiento y accesibilidad",
          "SEO técnico: metadatos, sitemap e indexación",
        ],
        deliverables: [
          "Diseño de la interfaz adaptado a tu marca",
          "Desarrollo completo y publicación con dominio",
          "Guía para actualizar el contenido",
          "Acompañamiento después del lanzamiento",
        ],
        faq: [
          {
            q: "¿Necesito tener hosting y dominio?",
            a: "No. Te asesoro y lo dejo configurado, o me adapto a lo que ya tengas.",
          },
          {
            q: "¿Puede ser solo catálogo, sin pagos en línea?",
            a: "Sí. Es lo más común: catálogo profesional con el pedido enviado por WhatsApp.",
          },
        ],
      },
    },
    {
      slug: "saas",
      title: "Aplicaciones web y SaaS",
      desc: "Sistemas de gestión, paneles y plataformas con usuarios, roles, reportes y suscripciones.",
      icon: LayoutDashboard,
      details: {
        subtitle:
          "Cuando una hoja de Excel ya no alcanza: aplicaciones a medida para operar tu negocio o para venderlas como producto.",
        features: [
          "Sistemas de gestión: inventario, ventas, clientes, finanzas",
          "Dashboards con métricas del negocio",
          "Usuarios, roles y permisos",
          "Apps instalables (PWA) que funcionan sin conexión",
          "Plataformas multiusuario con suscripciones",
          "Importación y exportación de datos (Excel, PDF)",
        ],
        deliverables: [
          "Definición de módulos y flujos con el cliente",
          "Entregas por etapas con demo funcional",
          "Despliegue y configuración de base de datos",
          "Documentación de uso",
        ],
        faq: [
          {
            q: "¿Puedo empezar con algo pequeño y crecer después?",
            a: "Sí, y es lo recomendable. Empezamos por el módulo que más valor da y se amplía por etapas.",
          },
        ],
      },
    },
    {
      slug: "apps",
      title: "Apps móviles y de escritorio",
      desc: "Apps Android/iOS con Flutter y aplicaciones de escritorio con Python para uso interno.",
      icon: Smartphone,
      details: {
        subtitle:
          "Tu negocio en el bolsillo de tus clientes, o una herramienta de escritorio para tu equipo.",
        features: [
          "Apps multiplataforma (Android e iOS) con Flutter",
          "Aplicaciones de escritorio con Python",
          "Login, perfiles y sincronización con la nube",
          "Funcionamiento sin conexión cuando hace falta",
          "Integración con tu backend o con uno nuevo",
        ],
        deliverables: [
          "Diseño de pantallas y flujo de navegación",
          "App funcional por etapas, con builds de prueba",
          "Publicación o instaladores según el caso",
        ],
        faq: [
          {
            q: "¿Android e iOS con el mismo proyecto?",
            a: "Sí. Con Flutter se trabaja con una sola base de código para ambas plataformas.",
          },
        ],
      },
    },
    {
      slug: "backend",
      title: "Backend, APIs e integraciones",
      desc: "APIs, bases de datos, autenticación e integraciones con pagos, mensajería y servicios externos.",
      icon: Server,
      details: {
        subtitle:
          "La parte que no se ve: datos, reglas de negocio e integraciones que hacen que todo funcione.",
        features: [
          "APIs REST claras y documentadas",
          "Autenticación y roles",
          "Bases de datos PostgreSQL, Supabase, Firebase o SQLite",
          "Integraciones con WhatsApp, Telegram, pagos y email",
          "Validaciones, manejo de errores y registros",
        ],
        deliverables: [
          "Modelo de datos y diseño de endpoints",
          "API documentada",
          "Despliegue en producción",
        ],
      },
    },
    {
      slug: "automatizacion-ia",
      title: "Automatización e IA",
      desc: "Bots, asistentes con IA y flujos automáticos que ahorran horas de trabajo manual.",
      icon: Bot,
      badge: "Nuevo",
      details: {
        subtitle:
          "Tareas repetitivas que hoy hace una persona, resueltas por software: más rápido, sin errores y a cualquier hora.",
        features: [
          "Chatbots con IA para WhatsApp, Telegram o tu web",
          "Asistentes que responden con la información de tu negocio",
          "Extracción de datos de facturas, PDF y documentos",
          "Reportes y alertas automáticas",
          "Integración de modelos de IA en tu producto",
          "Automatización de procesos entre tus herramientas",
        ],
        deliverables: [
          "Análisis del proceso a automatizar",
          "Prototipo funcional para validar",
          "Implementación, despliegue y monitoreo",
        ],
        faq: [
          {
            q: "¿Cómo sé si mi proceso se puede automatizar?",
            a: "Si se repite, sigue pasos parecidos cada vez o consiste en leer y mover información, probablemente sí. Cuéntamelo y lo evaluamos juntos.",
          },
        ],
      },
    },
    {
      slug: "mantenimiento",
      title: "Mantenimiento y mejoras",
      desc: "Corrección de errores, nuevas funciones y optimización de proyectos existentes.",
      icon: Wrench,
      details: {
        subtitle:
          "Después de publicar, lo importante es mantener tu producto rápido, seguro y actualizado.",
        features: [
          "Corrección de errores y mejoras evolutivas",
          "Optimización de rendimiento",
          "Actualización de dependencias y seguridad",
          "Mejoras de diseño a partir del feedback de usuarios",
        ],
        deliverables: [
          "Diagnóstico inicial del proyecto",
          "Plan de mejoras por prioridad",
          "Cambios entregados y verificados",
        ],
        faq: [
          {
            q: "¿Trabajas sobre proyectos que no hiciste tú?",
            a: "Normalmente sí. Primero reviso el código y el estado del proyecto para estimar el esfuerzo.",
          },
        ],
      },
    },
  ],

  process: [
    {
      step: "01",
      title: "Entender",
      desc: "Conversamos sobre tu negocio y tu objetivo. Definimos alcance y prioridades.",
    },
    {
      step: "02",
      title: "Proponer",
      desc: "Te presento una propuesta con etapas, tiempos y entregables claros.",
    },
    {
      step: "03",
      title: "Construir",
      desc: "Desarrollo por etapas con demos frecuentes para que veas el avance real.",
    },
    {
      step: "04",
      title: "Lanzar y acompañar",
      desc: "Publicación, ajustes finales y soporte para que el producto siga creciendo.",
    },
  ],

  faq: [
    {
      q: "¿Trabajas en remoto con clientes de otros países?",
      a: "Sí. Trabajo 100% remoto, por etapas y con demos, para que veas el progreso antes de cada entrega.",
    },
    {
      q: "¿Cómo empezamos?",
      a: "Escríbeme por WhatsApp y cuéntame la idea. Te hago algunas preguntas y te envío una propuesta con alcance, etapas y tiempos.",
    },
    {
      q: "¿Entregas el código del proyecto?",
      a: "Sí. Recibes el repositorio, los accesos a lo publicado y una guía básica de uso.",
    },
    {
      q: "¿Estás abierto a ofertas de empleo?",
      a: "Sí. Además de proyectos freelance, me interesan posiciones como desarrollador full stack o frontend con React y TypeScript.",
    },
  ],
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${siteData.brand.whatsappNumber}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;
