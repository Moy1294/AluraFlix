import React from 'react';
import VideoForm from '../components/VideoForm';
import '../styles/pages/NewVideo.css';

function NewVideo() {
  return (
    <div className="new-video">
      <h2>Agregar Nuevo Video</h2>
      <VideoForm />
    </div>
  );
}

export default NewVideo;
