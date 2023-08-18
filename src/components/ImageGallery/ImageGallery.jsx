import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onLargeImageToggle, openModals }) => {
  return (
    <GalleryList>
      {images.map(({ webformatURL, id, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onLargeImageToggle={() => {
            onLargeImageToggle(id);
          }}
          isOpenModal={openModals[id] || false}
        />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onLargeImageToggle: PropTypes.func.isRequired,
  openModals: PropTypes.object.isRequired
};
