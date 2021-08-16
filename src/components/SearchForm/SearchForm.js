import { useState } from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox.js';

function SearchForm({onChangeFilters}) {
  const [searchQuery, setSearchQuery] = useState("");
  let searchError = '';

  function handleSubmit(evt) {
    evt.preventDefault();
    onChangeFilters({
      key: "search",
      value: searchQuery,
    });
    if (!searchQuery) {
      searchError = 'Нужно ввести ключевое слово.';
    }
  }

  function handleChangeSearchQuery(evt) {
    setSearchQuery(evt.target.value);
  }

  return (
    <section className="searchform">
      <div className="searchform__content container">
        <form className="form form_type_search search__form" onSubmit={handleSubmit}>
          <label className="searchform__label">
            <input
              className="searchform__input"
              type="text"
              name="search"
              id="search"
              placeholder="Фильм"
              value={searchQuery}
              onChange={handleChangeSearchQuery}
              required
            />
            <span id="search-error" className="searchform__input-error">{searchError}</span>
            <button type="submit" className="button button_type_search"></button>
          </label>
        </form>
        <FilterCheckBox
          onChangeFilters={onChangeFilters}
        />
      </div>
    </section>
  );
}

export default SearchForm;
