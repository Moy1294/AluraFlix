import React, { useState } from 'react';
import { useVideos } from '../hooks/useVideos';
import VideoForm from './VideoForm';
import '../styles/components/VideoCard.css';

function VideoCard({ video }) {
  const { deleteVideo } = useVideos();
  const [isEditing, setIsEditing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    deleteVideo(video.id);
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleCardClick = () => {
    window.open(video.videoUrl, '_blank');
  };

  return (
    <div className="video-card" onClick={handleCardClick}>
      <img src={video.imageUrl} alt={video.title} />
      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <button className="category-btn">{video.category}</button>
        <div className="video-actions">
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      </div>
      {isEditing && (
        <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
          <VideoForm video={video} onClose={() => setIsEditing(false)} />
        </div>
      )}
      {showConfirmation && (
        <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
          <p>¿Estás seguro de que quieres eliminar este video?</p>
          <button onClick={confirmDelete}>Sí, eliminar</button>
          <button onClick={cancelDelete}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default VideoCard;
