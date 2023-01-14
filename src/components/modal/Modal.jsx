import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

const modalElement = document.querySelector('#modal-root');
Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  bigUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
