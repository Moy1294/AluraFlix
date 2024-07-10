import React from 'react';
import Banner from '../components/Banner';
import VideoList from '../components/VideoList';
import { useVideos } from '../hooks/useVideos';
import '../styles/pages/Home.css';

function Home() {
  const { videos, categories } = useVideos();

  return (
    <div className="home">
      <Banner />
      {categories.map(category => (
        <VideoList 
          key={category.name} 
          category={category.name} 
          videos={videos.filter(video => video.category === category.name)} 
        />
      ))}
    </div>
  );
}

export default Home;
