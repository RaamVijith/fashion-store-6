import React from 'react';
import './ImageGrid.css';
import image1 from "../assets/images/banner-01.jpg"
import image2 from "../assets/images/banner-02.jpg"
import image3 from "../assets/images/banner-03.jpg"
import image4 from "../assets/images/banner-04.jpg"
import image5 from "../assets/images/banner-05.jpg"
import image7 from "../assets/images/banner-07.jpg"



const images = [
  {
    src: {image1},
    alt: 'Woman Accessories',
    caption: 'Woman Accessories',
  },
  {
    src: {image2},
    alt: 'Woman Store',
    caption: 'Woman Store',
  },
  {
    src: {image3},
    alt: 'Special Discount',
    caption: 'Special Discount',
  },
  {
    src: {image4},
    alt: 'Man Accessories',
    caption: 'Man Accessories',
  },
  {
    src: {image5},
    alt: 'Winter Collection',
    caption: 'Winter Collection',
  },
  {
    src: {image7},
    alt: 'Man\'s Store',
    caption: 'Man\'s Store',
  },
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <img src={image.src} alt={image.alt} />
          <div className="caption">{image.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
