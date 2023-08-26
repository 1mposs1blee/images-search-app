import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ImageModal, LargeImage } from './Modal.styled';

export const Modal = ({
  largeImageURL,
  tags,
  onLargeImageToggle,
  scrollPosition,
}) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code !== 'Escape') {
        return;
      }

      onLargeImageToggle();
    };

    document.addEventListener('keydown', onKeyDown);

    document.body.classList.add('overflow-hidden');

    return () => {
      document.removeEventListener('keydown', onKeyDown);

      document.body.classList.remove('overflow-hidden');

      window.scrollTo({
        top: scrollPosition,
        behavior: 'auto',
      });
    };
  }, [onLargeImageToggle, scrollPosition]);

  const onOverlayClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onLargeImageToggle();
  };

  return (
    <Overlay onClick={onOverlayClick}>
      <ImageModal>
        <LargeImage src={largeImageURL} alt={tags} />
      </ImageModal>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onLargeImageToggle: PropTypes.func.isRequired,
};
