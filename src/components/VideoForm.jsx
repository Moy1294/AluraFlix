import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useVideos } from '../hooks/useVideos';
import '../styles/components/VideoForm.css';

function VideoForm({ video: initialVideo, onClose }) {
  const { id } = useParams();
  const { videos, categories, addVideo, updateVideo } = useVideos();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialVideo) {
      setTitle(initialVideo.title);
      setCategory(initialVideo.category);
      setImageUrl(initialVideo.imageUrl);
      setVideoUrl(initialVideo.videoUrl);
      setDescription(initialVideo.description);
    } else if (id) {
      const video = videos.find(v => v.id === parseInt(id));
      if (video) {
        setTitle(video.title);
        setCategory(video.category);
        setImageUrl(video.imageUrl);
        setVideoUrl(video.videoUrl);
        setDescription(video.description);
      }
    }
  }, [id, videos, initialVideo]);

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'El título es requerido';
    if (!category) newErrors.category = 'La categoría es requerida';
    if (!imageUrl.trim()) newErrors.imageUrl = 'La URL de la imagen es requerida';
    if (!videoUrl.trim()) newErrors.videoUrl = 'La URL del video es requerida';
    if (!description.trim()) newErrors.description = 'La descripción es requerida';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const videoData = { title, category, imageUrl, videoUrl, description };
      if (initialVideo) {
        updateVideo(initialVideo.id, videoData);
        onClose();
      } else if (id) {
        updateVideo(parseInt(id), videoData);
        navigate('/');
      } else {
        addVideo(videoData);
        navigate('/');
      }
    }
  };

  const handleClear = () => {
    if (initialVideo) {
      setTitle(initialVideo.title);
      setCategory(initialVideo.category);
      setImageUrl(initialVideo.imageUrl);
      setVideoUrl(initialVideo.videoUrl);
      setDescription(initialVideo.description);
    } else {
      setTitle('');
      setCategory('');
      setImageUrl('');
      setVideoUrl('');
      setDescription('');
    }
    setErrors({});
  };

  return (
    <form className="video-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título del video"
        required
      />
      {errors.title && <span className="error">{errors.title}</span>}
      
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Selecciona una categoría</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.name}>{cat.name}</option>
        ))}
      </select>
      {errors.category && <span className="error">{errors.category}</span>}
      
      <input
        type="url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="URL de la imagen"
        required
      />
      {errors.imageUrl && <span className="error">{errors.imageUrl}</span>}
      
      <input
        type="url"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="URL del video"
        required
      />
      {errors.videoUrl && <span className="error">{errors.videoUrl}</span>}
      
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción del video"
        required
      />
      {errors.description && <span className="error">{errors.description}</span>}
      
      <div className="form-buttons">
        <button type="submit">{initialVideo ? 'Actualizar' : 'Guardar'}</button>
        <button type="button" onClick={handleClear}>Limpiar</button>
        {initialVideo && <button type="button" onClick={onClose}>Cancelar</button>}
      </div>
    </form>
  );
}

export default VideoForm;