import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('suscripcion');

  // Datos de los planes
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
    }
  ];

  const filteredPlans = pricingPlans.filter(plan => plan.type === activeTab);

  return (
    <section id="pricing" style={{
      backgroundColor: '#f9fafb',
      padding: '6rem 0',
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#212529'
          }}
        >
          Nuestros Planes de Precios
        </motion.h2>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3rem',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            background: '#e5e7eb',
            borderRadius: '50px',
            padding: '5px'
          }}>
            <button 
              style={{ 
                border: 'none',
                padding: '0.75rem 2rem',
                fontSize: '1rem',
                fontWeight: '600',
                background: activeTab === 'suscripcion' ? '#fff' : 'transparent',
                cursor: 'pointer',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === 'suscripcion' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                color: activeTab === 'suscripcion' ? '#4361ee' : 'inherit'
              }}
              onClick={() => setActiveTab('suscripcion')}
            >
              Suscripción
            </button>
            <button 
              style={{ 
                border: 'none',
                padding: '0.75rem 2rem',
                fontSize: '1rem',
                fontWeight: '600',
                background: activeTab === 'proyecto' ? '#fff' : 'transparent',
                cursor: 'pointer',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === 'proyecto' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                color: activeTab === 'proyecto' ? '#4361ee' : 'inherit'
              }}
              onClick={() => setActiveTab('proyecto')}
            >
              Por Proyecto
            </button>
          </div>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          width: '100%'
        }}>
          {filteredPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ 
                background: '#fff',
                borderRadius: '8px',
                padding: '2.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                transition: 'all 0.3s ease',
                border: plan.popular ? '2px solid #4361ee' : 'none'
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px',
                  background: '#4361ee',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  Más Popular
                </div>
              )}
              
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#212529'
              }}>
                {plan.title}
              </h3>
              
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#4361ee'
              }}>
                {plan.price}
              </div>
              
              <p style={{
                color: '#6c757d',
                marginBottom: '2rem',
                minHeight: '50px'
              }}>
                {plan.description}
              </p>
              
              <ul style={{
                listStyle: 'none',
                marginBottom: '2rem'
              }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    color: '#212529'
                  }}>
                    <FiCheck style={{
                      marginRight: '0.5rem',
                      color: '#4bb543',
                      flexShrink: '0',
                      marginTop: '3px'
                    }} /> 
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.8rem 1.8rem',
                backgroundColor: '#4361ee',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}>
                {activeTab === 'suscripcion' ? 'Suscribirse' : 'Contratar'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;