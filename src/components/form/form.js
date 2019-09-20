import React, { Component } from 'react';

import './form.css';

class Form extends Component {

  state = {
    title: '',
    description: '',
    favorites: false
  }

  onTitleInput = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  onDescriptionInput = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  onFavoriteToggle = (event) => {
    this.setState({
      favorites: event.target.checked
    })
  }

  onSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      title: this.state.title,
      description: this.state.description,
      favorites: this.state.favorites
    }
    this.reset();
    this.props.onItemAdded(newItem);
  }

  reset() {
    this.setState({
      title: '',
      description: '',
      favorites: false
    })
  }

  render() {
    return(
      <form action="#"
            className="form"
            onSubmit={ this.onSubmit }>
        <input type="text"
               className="form__title-input"
               placeholder="Введите название"
               value={ this.state.title }
               onInput={ this.onTitleInput }/>
        <textarea className="form__description-input"
                  placeholder="Введите описание"
                  value={ this.state.description }
                  onInput={ this.onDescriptionInput }>
        </textarea>
        <label className="form__checkbox-label"> В избранное
          <input type="checkbox"
                 className="checkbox__input"
                 checked={ this.state.favorites }
                 onChange={ this.onFavoriteToggle }/>
        </label>
        <button className="form__submit-btn"
                type="submit">
                Добавить
        </button>
      </form>
    )
  }
}

export default Form;
