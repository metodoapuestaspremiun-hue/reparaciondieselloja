'use client';

import { useState } from 'react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: '',
    brand: '',
    dateTime: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await fetch('/procesar_contacto.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ 
          text: result.message || 'Solicitud enviada exitosamente', 
          type: 'success' 
        });
        // Limpiar formulario
        setFormData({
          name: '',
          phone: '',
          issue: '',
          brand: '',
          dateTime: ''
        });
      } else {
        setMessage({ 
          text: result.message || 'Error al enviar la solicitud', 
          type: 'error' 
        });
      }
    } catch (error) {
      setMessage({ 
        text: 'Error de conexión. Inténtalo nuevamente.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-heading font-bold text-ink uppercase tracking-wide mb-6">Solicita tu Cita Ahora</h3>
      
      {/* Mensajes de estado */}
      {message.text && (
        <div className={`p-4 rounded-[2px] text-sm font-sans ${
          message.type === 'success' 
            ? 'bg-emerald-50 border border-emerald-300 text-emerald-800' 
            : 'bg-red-50 border border-red-300 text-red-800'
        }`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="flex h-11 w-full rounded-[2px] border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-ash focus:outline-none focus:border-amber font-sans"
            placeholder="Tu nombre completo"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          
          <input
            type="tel"
            className="flex h-11 w-full rounded-[2px] border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-ash focus:outline-none focus:border-amber font-sans"
            placeholder="Tu número de teléfono"
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        
        <textarea
          name="issue"
          className="flex min-h-[90px] w-full rounded-[2px] border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-ash focus:outline-none focus:border-amber font-sans"
          placeholder="¿Hace qué tiempo notas el problema? Cuéntanos sobre la falla..."
          rows={3}
          required
          value={formData.issue}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        
        <input
          className="flex h-11 w-full rounded-[2px] border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-ash focus:outline-none focus:border-amber font-sans"
          placeholder="¿Cuál es la marca de tu vehículo?"
          required
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        
        <input
          type="datetime-local"
          className="flex h-11 w-full rounded-[2px] border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-ash focus:outline-none focus:border-amber font-sans"
          required
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3.5 px-4 text-base font-heading font-bold uppercase tracking-wider rounded-[2px] transition-colors duration-200 flex items-center justify-center ${
            isSubmitting
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-amber hover:bg-[#d99700] text-charcoal'
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
        </button>
      </form>
    </div>
  );
}
