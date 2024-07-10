import React, { useState } from 'react';
import CategoryForm from '../components/CategoryForm';
import { useVideos } from '../hooks/useVideos';
import '../styles/pages/NewCategory.css';

function NewCategory() {
  const { categories, addCategory, deleteCategory, updateCategory } = useVideos();
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const handleEdit = (category) => {
    setEditingCategory(category);
    setShowForm(true);
  };

  const handleFormSubmit = (categoryData) => {
    if (editingCategory) {
      updateCategory(editingCategory.id, categoryData);
    } else {
      addCategory(categoryData);
    }
    setShowForm(false);
    setEditingCategory(null);
  };

  const handleDelete = (category) => {
    setCategoryToDelete(category);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    if (categoryToDelete) {
      deleteCategory(categoryToDelete.id);
      setShowConfirmation(false);
      setCategoryToDelete(null);
    }
  };

  return (
    <div className="new-category">
      <h2>Gestionar Categorías</h2>
      <div className="category-actions">
        <button 
          className="btn-primary"
          onClick={() => {
            setShowForm(!showForm);
            setEditingCategory(null);
          }}
        >
          {showForm ? 'Ocultar Formulario' : 'Crear Nueva Categoría'}
        </button>
      </div>
      {showForm && (
        <div className="form-container">
          <CategoryForm 
            onSubmit={handleFormSubmit} 
            initialData={editingCategory}
            onClose={() => {
              setShowForm(false);
              setEditingCategory(null);
            }}
          />
        </div>
      )}
      <div className="category-list">
        <h3>Categorías Existentes</h3>
        <div className="category-grid">
          {categories.map(category => (
            <div key={category.id} className="category-item">
              <span className="category-name" style={{ backgroundColor: category.color }}>{category.name}</span>
              <div className="category-buttons">
                <button className="btn-edit" onClick={() => handleEdit(category)}>Editar</button>
                <button className="btn-delete" onClick={() => handleDelete(category)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showConfirmation && (
        <div className="confirmation-modal">
          <p>¿Estás seguro de que quieres eliminar la categoría "{categoryToDelete?.name}"?</p>
          <div className="confirmation-buttons">
            <button className="btn-confirm" onClick={confirmDelete}>Sí, eliminar</button>
            <button className="btn-cancel" onClick={() => setShowConfirmation(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewCategory;
