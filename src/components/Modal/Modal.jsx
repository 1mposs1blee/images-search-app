import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ImageModal, LargeImage } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);

    document.body.classList.add('overflow-hidden');
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);

    document.body.classList.remove('overflow-hidden');
  }

  onKeyDown = e => {
    if (e.code !== 'Escape') {
      return;
    }

    this.props.onLargeImageToggle();
  };

  onOverlayClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onLargeImageToggle();
  };

  render() {
    const { largeImageURL, tags } = this.props;

    return (
      <Overlay onClick={this.onOverlayClick}>
        <ImageModal>
          <LargeImage src={largeImageURL} alt={tags} />
        </ImageModal>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onLargeImageToggle: PropTypes.func.isRequired,
};
