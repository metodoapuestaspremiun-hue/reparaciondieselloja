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
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita tu Cita Ahora</h3>
      
      {/* Mensajes de estado */}
      {message.text && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-100 border border-green-400 text-green-700' 
            : 'bg-red-100 border border-red-400 text-red-700'
        }`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 focus:border-red-500"
            placeholder="Tu nombre completo"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          
          <input
            type="tel"
            className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 focus:border-red-500"
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
          className="flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 focus:border-red-500"
          placeholder="¿Hace qué tiempo notas el problema? Cuéntanos sobre la falla..."
          rows={3}
          required
          value={formData.issue}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        
        <input
          className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 focus:border-red-500"
          placeholder="¿Cuál es la marca de tu vehículo?"
          required
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        
        <input
          type="datetime-local"
          className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 focus:border-red-500"
          required
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 text-lg font-bold rounded-lg transition-colors duration-200 flex items-center justify-center ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#ec0018] hover:bg-[#c40014] text-white'
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
        </button>
      </form>
    </div>
  );
}
