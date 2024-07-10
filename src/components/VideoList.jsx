import React from 'react';
import VideoCard from './VideoCard';
import '../styles/components/VideoList.css';

function VideoList({ category, videos }) {
  return (
    <div className="video-list">
      <h2>{category}</h2>
      <div className="video-grid">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default VideoList;
