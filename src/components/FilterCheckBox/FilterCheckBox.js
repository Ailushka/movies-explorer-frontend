import './FilterCheckBox.css';


function FilterCheckBox({onChangeFilters}) {
  function handleChangeFilter(evt) {
    onChangeFilters({
      key: evt.target.name,
      value: evt.target.type === "checkbox" ? evt.target.checked : evt.target.value,
    });
  }

  return (
    <div className="filtercheckbox">
      <label htmlFor="filtercheckbox" className="filtercheckbox__label">
        <span className="filtercheckbox__text">Короткометражки</span>
        <input
          className="filtercheckbox__input"
          type="checkbox"
          name="filtercheckbox"
          id="filtercheckbox"
          onChange={handleChangeFilter}
        />
        <span className="filtercheckbox__switch"></span>
      </label>
    </div>
  );
}

export default FilterCheckBox;
