import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox.js';

function SearchForm() {
  return (
    <section class="searchform">
      <div class="searchform__content container">
        <form class="form form_type_search search__form">
          <label class="searchform__label">
            <input
              class="searchform__input"
              type="text"
              name="search"
              id="search"
              placeholder="Фильм"
              required
            />
            <button type="submit" class="button button_type_search"></button>
          </label>
        </form>
        <FilterCheckBox />
      </div>
    </section>
  );
}

export default SearchForm;
