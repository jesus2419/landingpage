import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiMenu, FiX, FiCheck, FiStar } from 'react-icons/fi';
import './App.css';
import PricingSection from './prices';



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('suscripcion');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtrar planes basados en la pestaña activa
  const filteredPlans = pricingPlans.filter(plan => plan.type === activeTab);

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container"
        >
          <div className="logo">Brand</div>
          
          <nav className="desktop-nav">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
          
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="mobile-menu"
          >
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Transforma tu negocio con nuestra solución</h1>
            <p>La plataforma todo en uno que necesitas para llevar tu empresa al siguiente nivel.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
            >
              Comienza ahora <FiArrowRight />
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="image-placeholder">
              <img 
                src="https://th.bing.com/th/id/OIP.KvzH1vSEMnHSqJHJbOvIBQHaE8?rs=1&pid=ImgDetMain" 
                alt="Producto demo" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Características Principales
          </motion.h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} fill={i < testimonial.rating ? '#FFD700' : 'none'} />
                  ))}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="author">
                  <div className="author-avatar"></div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.position}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />
     
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-card"
          >
            <h2>¿Listo para comenzar?</h2>
            <p>Únete a miles de empresas que ya están transformando su negocio.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
            >
              Comienza tu prueba gratuita
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Brand</h3>
              <p>La solución todo en uno para tu negocio.</p>
            </div>
            
            <div className="footer-col">
              <h4>Enlaces</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#testimonials">Testimonials</a>
            </div>
            
            <div className="footer-col">
              <h4>Contacto</h4>
              <p>email@ejemplo.com</p>
              <p>+1 234 567 890</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Brand. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Datos de ejemplo
const features = [
  {
    id: 1,
    icon: <FiCheck size={32} />,
    title: "Fácil de usar",
    description: "Interfaz intuitiva que cualquiera puede dominar en minutos."
  },
  {
    id: 2,
    icon: <FiCheck size={32} />,
    title: "Potente análisis",
    description: "Obtén insights detallados sobre tu negocio."
  },
  {
    id: 3,
    icon: <FiCheck size={32} />,
    title: "Integraciones",
    description: "Conecta con tus herramientas favoritas."
  },
  {
    id: 4,
    icon: <FiCheck size={32} />,
    title: "Soporte 24/7",
    description: "Nuestro equipo está siempre disponible para ayudarte."
  }
];

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Esta plataforma ha transformado completamente nuestra forma de trabajar. La eficiencia ha aumentado un 200%.",
    name: "María González",
    position: "CEO, Empresa X"
  },
  {
    id: 2,
    rating: 4,
    text: "Increíble servicio al cliente y producto de alta calidad. Lo recomiendo a cualquier negocio.",
    name: "Juan Pérez",
    position: "Director, Compañía Y"
  },
  {
    id: 3,
    rating: 5,
    text: "La mejor inversión que hemos hecho este año. El ROI fue inmediato.",
    name: "Laura Martínez",
    position: "Gerente, Startup Z"
  }
];

const pricingPlans = [
  {
    id: 1,
    type: "suscripcion",
    title: "Básico",
    price: "$99/mes",
    description: "Perfecto para pequeñas empresas",
    features: [
      "5 proyectos activos",
      "10GB de almacenamiento",
      "Soporte por email",
      "Acceso básico a features"
    ],
    popular: false
  },
  {
    id: 2,
    type: "suscripcion",
    title: "Profesional",
    price: "$299/mes",
    description: "Para equipos en crecimiento",
    features: [
      "Proyectos ilimitados",
      "50GB de almacenamiento",
      "Soporte prioritario 24/7",
      "Acceso completo a features",
      "Informes avanzados"
    ],
    popular: true
  },
  {
    id: 3,
    type: "suscripcion",
    title: "Empresa",
    price: "Personalizado",
    description: "Soluciones a medida",
    features: [
      "Todo en Profesional",
      "Almacenamiento ilimitado",
      "Soporte dedicado",
      "Integraciones personalizadas",
      "Entrenamiento incluido"
    ],
    popular: false
  },
  {
    id: 4,
    type: "proyecto",
    title: "Sitio Web Básico",
    price: "$1,500",
    description: "Presupuesto por proyecto",
    features: [
      "Diseño personalizado",
      "5 páginas",
      "SEO básico",
      "Formulario de contacto",
      "Soporte por 1 mes"
    ],
    popular: false
  },
  {
    id: 5,
    type: "proyecto",
    title: "Tienda Online",
    price: "$3,500+",
    description: "Presupuesto por proyecto",
    features: [
      "Diseño responsive",
      "Hasta 50 productos",
      "Pasarela de pagos",
      "SEO avanzado",
      "Soporte por 3 meses"
    ],
    popular: true
  },
  {
    id: 6,
    type: "proyecto",
    title: "Solución Personalizada",
    price: "Cotización",
    description: "Presupuesto por proyecto",
    features: [
      "Desarrollo a medida",
      "Integraciones complejas",
      "Soporte extendido",
      "Entrenamiento personalizado",
      "Mantenimiento incluido"
    ],
    popular: false
  }
];

export default App;