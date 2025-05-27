// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title_ng: "NG",
        title_restore: "Restore",
        nav: {
          digitize: 'Digitize',
          about: 'About',
          donate: 'Donate',
          contact: "Contact",
        },
        hero: {
          title: "Get Your Negatives Scanned Online",
          description: "Turn your old film memories into stunning digital photos — effortlessly. Negative Restore helps you scan film negatives using your phone or scanner, and transform them into vivid, high-quality images in seconds.",
          cta: "Start Scanning Now",
        },
        benefits: {
          title: "Why Use NG Restore?",
          fast: "Fast & Easy Conversion",
          fast_description: "Just upload your image — we'll handle the rest. No editing skills needed. We make photo negative scanning simple and intuitive.",
          quality: "Impressive Image Quality",
          quality_description: "Not just converted — beautifully restored. Restore and preserve your memories in stunning detail.",
          online: "Works with Any Device",
          online_description: "Upload from your phone or computer. Our converter adapts to all types of negatives, slides, and photo formats.",
          secure_private: "Secure & Private",
          secure_private_description: "Your photos are safe. We automatically delete your data after two hours to comply with data protection regulations and ensure your privacy.",
        },
        mini_blog: {
          title: "Convert Film Negatives to Digital Photos",
          description: "At <strong>Negative Restore</strong>, we help you easily <strong>scan film negatives</strong> and turn them into high-quality digital photos. Use a <strong>slide and negative converter</strong> or our online tool - your memories are safe.",
          description2: "Our advanced technology lets you <strong>digitize photo negatives</strong> in minutes—no technical skills required. This means you can <strong>convert negatives to digital photos</strong> from the comfort of your home.",
          description3: "Stop letting your memories fade. <strong>Transfer negatives to digital</strong> today and keep them forever with our <strong>photo negative converter.</strong>",
          cta: "Convert My Negative Today",
        },
        digitize: {
            title: "Convert Negatives to Digital | Photo Negative Converter",
            metaDescription: "Turn film negatives into digital images in 3 easy steps. Use our free photo negative converter online.",
            heading: "Turn Film Negatives Into Digital Images in 3 Simple Steps",
            intro: "Digitising negatives has never been easier. Just follow the steps below and start converting your old film to digital pictures.",
            step1: {
              "title": "Place the Negative on a Bright Screen",
              "description": "Use a white background on a monitor or tablet to make your photo negative visible and clear. You can gently tape the edges to the screen using a small piece of transparent tape"
            },
            step2: {
              "title": "Take a Photo and Crop the White Borders",
              "description": "Use your smartphone to take a picture and crop the image so only the film is visible."
            },
            step3: {
              "title": "Upload Your Photo",
              "description": "Drop the image into our photo negative converter and get your digital image instantly."
            },
            dropZone: {
              title: "Upload or drag your image here",
              hint: "Only image files are allowed"
            },
            uploadTitle: "Upload Your Negative Image Below",
            uploading: "Processing...",
            success: "Image processed successfully!",
            error: "An error occurred while uploading the image",
            uploadBtn: "Upload image",
            processBtn: "Process image",
            processed: "Processed Image",
            processed_download: "Download Processed Image",
            uploadAnother: "Upload another image"
          },
        contact: {
          title: "Contact Us - Your Feedback Matters | NG Restore",
          description: "Reach out with questions, feedback or suggestions. We'd love to hear from you.",
          heading: "Get in Touch",
          subheading: "We'd love to hear your feedback, questions, or just a kind word.",
          name: "Your name",
          email: "Your email",
          message: "Your message",
          send: "Send Message",
          sending: "Sending...",
          success: "Thank you! Your message has been sent.",
          error: "Oops! Something went wrong. Please try again."
        },
        about: {
          metaTitle: "About This Project",
          metaDescription: "Learn more about the story and motivation behind this project.",
          heading: "About This Project",
          p1: "Hi! My name is Edwin, and I'm a student currently living in Barcelona. This project started as a way to learn and explore new technologies while solving a real-world problem.",
          p2: "As someone passionate about digital creativity and technology, I'm constantly improving this site — adding features, fixing bugs, and refining the user experience.",
          p3: "Maintaining this project also helps me cover some personal and academic expenses. If you find it useful or appreciate the effort behind it, feel free to support it or spread the word!",
          p4: "Thanks for visiting and using the site — your feedback and encouragement really help this project grow."
        }
      },
    },
    es: {
      translation: {
        title_ng: "NG",
        title_restore: "Restore",
        nav: {
          digitize: 'Digitaliza',
          about: 'Acerca de',
          donate: 'Donar'
        },
        hero: {
          title: "Devuelve la Vida  a Tus Negativos",
          description: "Escanea tus negativos fotográficos en línea con resultados de alta calidad utilizando Negative Restore.",
          cta: "Comienza a Escanear Ahora",
        },
        benefits: {
          title: "¿Por Qué Usar NG Restore?",
          fast: "Rápido y Fácil",
          fast_description: "Escanea tus negativos directamente en tu navegador sin descargas.",
          quality: "Resultados de Alta Calidad",
          quality_description: "Restaura y preserva tus recuerdos con un detalle impresionante.",
          online: "Totalmente En Línea",
          online_description: "Nuestra herramienta es 100% en línea: digitaliza desde cualquier parte del mundo.",
          secure_private: "Seguro y Privado",
          secure_private_description: "Tus fotos son seguras. Eliminamos automáticamente tus datos después de dos horas para cumplir con las regulaciones de protección de datos y garantizar tu privacidad.",
        },
        mini_blog: {
          title: "Convierte Negativos de Película a Fotos Digitales",
          description: "En <strong>Negative Restore</strong>, te ayudamos a escanear negativos de película y convertirlos en fotos digitales de alta calidad. Ya sea que estés usando un <strong>convertidor de diapositivas y negativos</strong> o nuestra herramienta en línea, tus recuerdos están a salvo.",
          description2: "Nuestra tecnología avanzada te permite <strong>digitalizar negativos fotográficos</strong> en minutos, sin necesidad de habilidades técnicas. Esto significa que puedes <strong>convertir negativos a fotos digitales</strong> desde la comodidad de tu hogar.",
          description3: "Deja de dejar que tus recuerdos se desvanezcan. <strong>Transfiere negativos a digitales</strong> hoy y mantén tus recuerdos para siempre con nuestro <strong>convertidor de negativos fotográficos.</strong>",
          cta: "Convierte Mi Negativo Hoy",
        },
        digitize: {
            title: "Convierte Negativos a Digital | Convertidor de Negativos Fotográficos",
            metaDescription: "Convierte negativos de película en imágenes digitales en 3 pasos sencillos. Usa nuestro convertidor de negativos fotográficos en línea gratis.",
            heading: "Convierte Negativos de Película en Imágenes Digitales en 3 Pasos Sencillos",
            intro: "Digitalizar negativos nunca ha sido tan fácil. Solo sigue los pasos a continuación y comienza a convertir tu película antigua en fotos digitales.",
            step1: {
              "title": "Coloca el Negativo sobre una Pantalla Brillante",
              "description": "Usa un fondo blanco en un monitor o tableta para hacer que tu negativo fotográfico sea visible y claro. Puedes pegar suavemente los bordes a la pantalla con un pequeño trozo de cinta transparente."
            },
            step2: {
              "title": "Toma una Foto y Recorta los Bordes Blancos",
              "description": "Usa tu teléfono inteligente para tomar una foto y recorta la imagen para que solo el negativo sea visible."
            },
            step3: {
              "title": "Sube Tu Foto",
              "description": "Arrastra la imagen a nuestro convertidor de negativos fotográficos y obtén tu imagen digital al instante."
            },
            uploadTitle: "Sube Tu Imagen Negativa Aquí Abajo",
          },
        "upload_button": "Subir y Procesar",
        "processing": "Procesando...",
        "processed_image": "Imagen Procesada",
        "download": "Descargar Imagen",
      },
    },
  },
  lng: "en", // Idioma por defecto
  fallbackLng: "es", // Idioma de respaldo
  interpolation: {
    escapeValue: false, // React ya maneja la seguridad
  },
});

export default i18n;
