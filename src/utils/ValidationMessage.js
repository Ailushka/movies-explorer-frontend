function validationMessage(name, value) {
  let errors = {};

  if (name === 'name') {
    if (!value) {
      errors = ({ [name]: 'Введите Ваше имя.'});
    } else if (!/[a-zA-Zа-яА-Я\sёЁ\-]/.test(value)) {
      errors = ({ [name]: 'Имя должно содержать только латиницу, кириллицу, пробел или дефис.'});
    }
  }

  if (name === 'password') {
    if (!value) {
      errors = ({ [name]: 'Введите Ваш пароль.' });
    }
  }

  if (name === 'email') {
    if (!value) {
      errors = ({ [name]: 'Введите Ваш E-mail.' });
    } else if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value)) {
      errors = ({ [name]: 'E-mail должен соответствовать шаблону электронной почты.'});
    }
  }

  return errors;

}

export default validationMessage;
