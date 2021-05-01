import React from 'react';

export interface GalleryImageProps {
  url: string
  total?: number
  imageNumber?: number
}


const GalleryImage: React.FC<GalleryImageProps> = ({url, total, imageNumber}) => {
  return (
    <div>
      <img src={url}/>
      <span>{imageNumber}/{total}</span>
    </div>
  );
};

export default GalleryImage;