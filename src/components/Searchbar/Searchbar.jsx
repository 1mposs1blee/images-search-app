import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  SearchForm,
  Input,
  FormButton,
  Header,
  ButtonSpan,
} from './Searchbar.styled';

const initialValues = {
  query: '',
};

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = ({ query }, { resetForm }) => {
    const normalizedQuery = query.trim().toLowerCase();

    onSubmit(normalizedQuery);

    resetForm();
  };

  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SearchForm>
          <FormButton type="submit">
            <ButtonSpan>Search</ButtonSpan>
          </FormButton>

          <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
