import { Component } from 'react';
import {
  SearchHeader,
  SearchForm,
  Button,
  Input,
  Label,
} from './Searchbar.styled';

import { FiSearch } from 'react-icons/fi';

class Searchbar extends Component {
  state = {
    querySearch: '',
  };

  handleChange = e => {
    this.setState({ querySearch: e.target.value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.querySearch);
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm>
          <Button type="submit" onSubmit={this.handleSubmit}>
            <Label>
              <FiSearch value={{ style: { width: 50, height: 50 } }} />
            </Label>
          </Button>

          <Input
            type="text"
            autocomplete="off"
            value={this.state.querySearch}
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

export default Searchbar;
