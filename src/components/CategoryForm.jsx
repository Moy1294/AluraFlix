import React, { useState, useEffect } from 'react';
import { useVideos } from '../hooks/useVideos';
import '../styles/components/CategoryForm.css';

function CategoryForm({ onSubmit, initialData, onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#000000');
  const [errors, setErrors] = useState({});

  const { categories } = useVideos();

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setColor(initialData.color);
    }
  }, [initialData]);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'El nombre es requerido';
    if (!description.trim()) newErrors.description = 'La descripción es requerida';
    if (categories.some(cat => cat.name.toLowerCase() === name.toLowerCase() && cat.id !== initialData?.id)) {
      newErrors.name = 'Ya existe una categoría con este nombre';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ name, description, color });
      handleClear();
    }
  };

  const handleClear = () => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setColor(initialData.color);
    } else {
      setName('');
      setDescription('');
      setColor('#000000');
    }
    setErrors({});
  };

  return (
    <form className="category-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de la categoría"
        required
      />
      {errors.name && <span className="error">{errors.name}</span>}
      
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción de la categoría"
        required
      />
      {errors.description && <span className="error">{errors.description}</span>}
      
      <div className="color-picker">
        <label htmlFor="color">Color de la categoría:</label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      
      <div className="form-buttons">
        <button type="submit">{initialData ? 'Actualizar' : 'Crear'} Categoría</button>
        <button type="button" onClick={handleClear}>Limpiar</button>
        {onClose && <button type="button" onClick={onClose}>Cancelar</button>}
      </div>
    </form>
  );
}

export default CategoryForm;