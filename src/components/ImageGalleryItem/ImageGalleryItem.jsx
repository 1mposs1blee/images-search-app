import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onLargeImageToggle,
  isOpenModal,
}) => {
  return (
    <>
      <GalleryItem>
        <Image onClick={onLargeImageToggle} src={webformatURL} alt={tags} />
      </GalleryItem>
      {isOpenModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onLargeImageToggle={onLargeImageToggle}
        />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onLargeImageToggle: PropTypes.func.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
};
