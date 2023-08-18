import { Component } from 'react';
import { fetchImages } from 'services/pixabay-api';
import { SearchBar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { Wrapper } from './App.styled';

const INITIAL_STATE = {
  searchQuery: '',
  result: [],
  page: 1,
  per_page: 12,
  totalPage: 0,
  isLoading: false,
  openModals: {},
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery: prevSearchQuery, page: prevPage } = prevState;
    const { searchQuery: nextSearchQuery, page: nextPage } = this.state;

    try {
      if (nextSearchQuery !== prevSearchQuery || nextPage !== prevPage) {
        this.setState({ isLoading: true });

        const data = await fetchImages(nextSearchQuery, nextPage);

        this.setState(({ result: prevResult, per_page }) => ({
          result: [...prevResult, ...data.hits],
          totalPage: Math.ceil(data.totalHits / per_page),
          isLoading: false,
        }));
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  handleFormSubmit = searchQuery => {
    if (searchQuery === this.state.searchQuery) {
      return;
    }
    this.setState({ ...INITIAL_STATE, searchQuery });
  };

  onClickLoadMore = () => {
    this.setState(({ page: prevPage }) => ({ page: prevPage + 1 }));
  };

  handleImageClick = id => {
    this.setState(prevState => ({
      openModals: {
        ...prevState.openModals,
        [id]: !prevState.openModals[id],
      },
    }));
  };

  render() {
    const { result, totalPage, page, isLoading, openModals } = this.state;

    return (
      <Wrapper>
        <SearchBar onSubmit={this.handleFormSubmit} />

        {result.length > 0 && (
          <ImageGallery
            images={result}
            onLargeImageToggle={this.handleImageClick}
            openModals={openModals}
          />
        )}

        {isLoading ? (
          <Loader />
        ) : (
          page < totalPage && <Button onClickButton={this.onClickLoadMore} />
        )}
      </Wrapper>
    );
  }
}
