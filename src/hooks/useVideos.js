import { useContext } from 'react';
import { VideoContext } from '../contexts/VideoContext';

export const useVideos = () => {
  return useContext(VideoContext);
};
