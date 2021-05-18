import React from 'react';
import GalleryImage, {GalleryImageProps} from './GalleryImage/GalleryImage'
// import GalleryImage from './GalleryImage/GalleryImage'

interface GalleryImages {
  images: GalleryImageProps[]
}

const Gallery: React.FC<GalleryImages> = ({images}) => {
  return (
    <div>
    {images.map((image,i) => {
      return <GalleryImage url={image.url} imageNumber={i + 1} total={images.length}/>
      })}
    </div>
  );
};

export default Gallery;