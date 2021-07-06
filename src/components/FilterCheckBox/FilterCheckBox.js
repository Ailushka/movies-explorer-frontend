import './FilterCheckBox.css';

function FilterCheckBox() {
  return (
    <div class="filtercheckbox">
      <label for="filtercheckbox" class="filtercheckbox__label">
        <span class="filtercheckbox__text">Короткометражки</span>
        <input
          class="filtercheckbox__input"
          type="checkbox"
          name="filtercheckbox"
          id="filtercheckbox"
        />
        <span class="filtercheckbox__switch"></span>
      </label>
    </div>
  );
}

export default FilterCheckBox;
