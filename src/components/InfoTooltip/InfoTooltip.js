import './InfoTooltip.css';

function InfoTooltip({isOpen, onClose, message}) {

  const popupClassNames = `popup ${isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={popupClassNames}>
      <div className="infotooltip">
        <img className="infotooltip__image" src={message.image} alt="Всплывающая подсказка" />
        <p className="infotooltip__message">{message.text}</p>
        <button className="button button_type_close" type="button" aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
