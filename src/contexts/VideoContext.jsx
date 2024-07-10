import React, { createContext, useState, useEffect } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState(() => {
    const savedVideos = localStorage.getItem('videos');
    return savedVideos ? JSON.parse(savedVideos) : [];
  });
  
  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [
      { id: 1, name: 'Frontend', description: 'Desarrollo web del lado del cliente', color: '#6BD1FF' },
      { id: 2, name: 'Backend', description: 'Desarrollo web del lado del servidor', color: '#00C86F' },
      { id: 3, name: 'Innovación', description: 'Nuevas tecnologías y tendencias', color: '#FF8C2A' },
      { id: 4, name: 'Gestión', description: 'Administración de proyectos y equipos', color: '#9CD33B' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const addVideo = (videoData) => {
    const newVideo = { ...videoData, id: Date.now() };
    setVideos([...videos, newVideo]);
  };

  const updateVideo = (id, videoData) => {
    setVideos(videos.map(video => video.id === id ? { ...video, ...videoData } : video));
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  const addCategory = (categoryData) => {
    const newCategory = { ...categoryData, id: Date.now() };
    setCategories([...categories, newCategory]);
  };

  const updateCategory = (id, categoryData) => {
    setCategories(categories.map(category => category.id === id ? { ...category, ...categoryData } : category));
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const clearForm = () => {
    console.log('Formulario limpiado');
  };

  const clearDatabase = () => {
    setVideos([]);
    setCategories([]);
    localStorage.removeItem('videos');
    localStorage.removeItem('categories');
  };

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  const getUniqueRandomItem = (items, existingItems, prefix = '') => {
    let attempts = 0;
    let item;
    do {
      item = items[Math.floor(Math.random() * items.length)];
      attempts++;
      if (attempts > 100) {
        const suffix = String(Math.floor(Math.random() * 100)).padStart(2, '0');
        return `${item}${suffix}`;
      }
    } while (existingItems.includes(prefix + item));
    return prefix + item;
  };

  const generateRandomData = async () => {
    try {
      const categoryNamesResponse = await fetch('/src/NombresCategorias.txt');
      const categoryNames = await categoryNamesResponse.text();
      const categoryNamesArray = categoryNames.split('\n').filter(Boolean);

      const videoTitlesResponse = await fetch('/src/TitulosVideos.txt');
      const videoTitles = await videoTitlesResponse.text();
      const videoTitlesArray = videoTitles.split('\n').filter(Boolean);

      const newCategories = Array(20).fill().map(() => ({
        id: Date.now() + Math.random(),
        name: getUniqueRandomItem(categoryNamesArray, categories.map(c => c.name)),
        description: 'Categoría generada aleatoriamente',
        color: getRandomColor()
      }));

      const newVideos = newCategories.flatMap(category => 
        Array(12).fill().map(() => ({
          id: Date.now() + Math.random(),
          title: getUniqueRandomItem(videoTitlesArray, videos.map(v => v.title), `${category.name}: `),
          category: category.name,
          imageUrl: `https://picsum.photos/200/300?random=${Date.now() + Math.random()}`,
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          description: `Este es un video sobre ${category.name}`
        }))
      );

      setCategories(prevCategories => [...prevCategories, ...newCategories]);
      setVideos(prevVideos => [...prevVideos, ...newVideos]);
    } catch (error) {
      console.error('Error al generar datos aleatorios:', error);
    }
  };

  return (
    <VideoContext.Provider value={{
      videos,
      categories,
      addVideo,
      updateVideo,
      deleteVideo,
      addCategory,
      updateCategory,
      deleteCategory,
      clearForm,
      clearDatabase,
      generateRandomData
    }}>
      {children}
    </VideoContext.Provider>
  );
};
