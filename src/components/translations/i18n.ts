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
        seo: {
           home: {
            title: "Scan Film Negatives to Digital Photos Online | Negative Restore",
            description: "Easily scan film negatives and turn negatives into digital photos. Upload online—no scanner needed. The best way to convert negatives into pictures fast.",
            canonical: "https://negativerestore.com",
           }
        },
        hero: {
          title: "Slide and Negative Converter – Scan Your Negatives Online",
          description: "Turn your old film memories into stunning digital photos with <strong>Negative Restore</strong>. Embrace the ease of <strong>negative to digital conversion</strong> using a simple online process that produces high-quality images within seconds.",
          cta: "Start Scanning Now",
        },
        benefits: {
          title: "Why Choose Negative Restore?",
          fast: "Fast & Easy Conversion",
          fast_description: "Just upload your image — we'll handle the rest. No editing skills needed. We make photo negative scanning simple and intuitive",
          quality: "Impressive Image Quality",
          quality_description: "Not just converted — beautifully restored. Restore and preserve your memories in stunning detail.",
          online: "Compatible with All Devices",
          online_description: "Upload from your phone or computer. Our converter adapts to all types of negatives, slides, and photo formats.",
          secure_private: "Secure & Private",
          secure_private_description: "We prioritize your privacy by automatically deleting data after two hours, ensuring your images remain safe and secure during the <strong>film to digital service.</strong>",
        },
        mini_blog: {
          title: "Convert Film Negatives to Digital Photos",
          description: "At <strong>Negative Restore</strong>, we help you easily <strong>scan film negatives</strong> and turn them into high-quality digital photos. Use a <strong>slide and negative converter</strong> or our online tool - your memories are safe.",
          description2: "Our advanced technology lets you <strong>digitize photo negatives</strong> in minutes—no technical skills required. This means you can <strong>convert negatives to digital photos</strong> from the comfort of your home.",
          description3: "Stop letting your memories fade. <strong>Transfer negatives to digital</strong> today and keep them forever with our <strong>photo negative converter.</strong>",
          cta: "Convert Negatives Now",
        },
        howto: {
          title: "How to scan film negatives and turn them into digital photos",
          step1_title: "Place the negative on a bright white screen",
          step1_text:
            "Set your phone, tablet, or monitor to a bright white screen. Place the film negative flat to prepare for scanning.",
          step2_title: "Photograph and crop the frame",
          step2_text:
            "Use your smartphone camera to scan film negatives. Shoot from above, crop the borders, and prepare your picture for conversion.",
          step3_title: "Upload and turn negatives into digital photos",
          step3_text:
            "Upload the photo to Negative Restore. Instantly scan negatives to digital and download your converted picture.",
          list_step1:
            "Place the film negative on a bright white screen (phone/tablet/monitor).",
          list_step2:
            "Scan by photographing and cropping the frame with your smartphone—no need for the best scanner for negatives.",
          list_step3:
            "Upload to Negative Restore, instantly scan negatives to digital, and turn negatives into pictures you can download and share.",
          images: {
            step1: "/images/howto/step1.jpg",
            step2: "/images/howto/step2.jpg",
            step3: "/images/howto/step3.jpg"
          }
        },
        faq: {
          q1: "Can I scan film negatives without a scanner?",
          a1: "Yes. Use a bright screen as backlight, take a photo with your smartphone, and upload it to Negative Restore to turn negatives into digital photos.",
          q2: "What is the best scanner for negatives?",
          a2: "You don’t need a dedicated scanner. Negative Restore lets you scan negatives to digital photos online with just your phone.",
          q3: "Can I turn negatives into pictures quickly?",
          a3: "Yes. In less than 2 minutes, you can digitize film negatives, process them, and download your pictures."
        },
        digitize: {
            clear: "Clear",
            title: "Convert Negatives to Digital | Photo Negative Converter",
            metaDescription: "Turn film negatives into digital images in 3 easy steps. Use our free photo negative converter online.",
            heading: "Turn Film Negatives Into Digital Images in 3 Simple Steps",
            intro: "Digitising negatives has never been easier. Just follow the steps below and start converting your old film to digital pictures.",
            step1: {
              "title": "Place the Negative on a Bright Screen",
              "description": "Use a white background on a monitor or tablet to make your photo negative visible and clear."
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
        share: {
          copy: "I just converted my negatives into digital photos in seconds with Negative Restore ✨ {{hashtag}}",
          hashtag: "#NegativeRestore",
          downloadButton: "Download Processed Image",
          helpTitle: "Help us to grow 🖤",
          helpSubtitle: "If you liked, follow us on social media and share your result with your friends!",
          instagramNote: "For Instagram, download your photo and upload it with the hashtag {{hashtag}}.",
          altNegative: "Negative preview",
          altProcessed: "Processed photo",
          ariaX: "Share on X",
          ariaFacebook: "Share on Facebook",
          ariaWhatsApp: "Share on WhatsApp",
          originalNegative: "Original negative",
          processedPhoto: "Processed photo"
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
          error: "Oops! Something went wrong. Please try again.",
          errors: {
            name: "Name must be between 2 and 50 characters.",
            email: "Please enter a valid email address.",
            message: "Message must be between 10 and 1000 characters."
  }
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
        howto: {
          title: "Cómo escanear negativos y convertirlos en fotos digitales",
          step1_title: "Coloca el negativo sobre una pantalla blanca brillante",
          step1_text:
            "Pon tu teléfono, tablet o monitor en blanco brillante. Coloca el negativo plano para prepararlo.",
          step2_title: "Fotografía y recorta el encuadre",
          step2_text:
            "Usa tu smartphone para escanear negativos. Dispara desde arriba, recorta los bordes y prepara la conversión.",
          step3_title: "Sube y convierte los negativos en fotos digitales",
          step3_text:
            "Sube la foto a Negative Restore. Escanea negativos a digital al instante y descarga tu imagen.",
          list_step1:
            "Coloca el negativo sobre una pantalla blanca brillante (teléfono/tablet/monitor).",
          list_step2:
            "Escanea fotografiando y recortando con tu smartphone — sin necesidad del mejor escáner para negativos.",
          list_step3:
            "Sube a Negative Restore, escanea negativos a digital y convierte negativos en fotos para descargar y compartir.",
          images: {
            step1: "/images/howto/step1.jpg",
            step2: "/images/howto/step2.jpg",
            step3: "/images/howto/step3.jpg"
          }
        },
        faq: {
          q1: "¿Puedo escanear negativos sin escáner?",
          a1: "Sí. Usa una pantalla brillante como luz, haz la foto con tu smartphone y súbela a Negative Restore para convertir negativos en fotos digitales.",
          q2: "¿Cuál es el mejor escáner para negativos?",
          a2: "No necesitas un escáner dedicado. Negative Restore te permite escanear negativos a digital en línea solo con tu teléfono.",
          q3: "¿Puedo convertir negativos en fotos rápidamente?",
          a3: "Sí. En menos de 2 minutos, digitalizas, procesas y descargas tus fotos."
        },
        digitize: {
            clear: "Limpiar",
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
        share: {
          copy: "Acabo de convertir mis negativos a fotos digitales en segundos con Negative Restore ✨ {{hashtag}}",
          hashtag: "#NegativeRestore",
          downloadButton: "Descargar imagen procesada",
          helpTitle: "Ayúdanos a crecer 🖤",
          helpSubtitle: "¡Comparte tu resultado con tus amigos!",
          instagramNote: "Para Instagram, descarga tu foto y súbela con el hashtag {{hashtag}}.",
          altNegative: "Vista previa del negativo",
          altProcessed: "Foto procesada",
          ariaX: "Compartir en X",
          ariaFacebook: "Compartir en Facebook",
          ariaWhatsApp: "Compartir en WhatsApp",
          originalNegative: "Negativo original",
          processedPhoto: "Foto procesada"
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
