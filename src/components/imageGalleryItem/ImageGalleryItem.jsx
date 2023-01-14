import { Image, ImageItem } from './ImageGalleryItem.styled';
import Modal from 'components/modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ImageGalleryItem({ src, alt, bigUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <ImageItem onClick={handleClick}>
        <Image src={src} alt={alt} loading="lazy" />
      </ImageItem>
      {isModalOpen && <Modal bigUrl={bigUrl} alt={alt} onClick={handleClick} />}
    </>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  bigUrl: PropTypes.string.isRequired,
};
