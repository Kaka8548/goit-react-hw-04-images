import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const modalElement = document.querySelector('#modal-root');

export default function Modal({ bigUrl, alt, onClick }) {
  useEffect(() => {
    const closeModal = () => {
      onClick();
    };

    document.addEventListener('keydown', closeModal);

    return document.removeEventListener('keydown', closeModal);
  }, [onClick]);

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      onClick();
    }
  };

  return createPortal(
    <Overlay onClick={handleClick}>
      <ModalWindow className="Modal">
        <img src={bigUrl} alt={alt} />
      </ModalWindow>
    </Overlay>,
    modalElement
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  bigUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
