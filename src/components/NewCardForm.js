import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      text: '',
      emoji: '',
    }
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmitCard = (event) => {
    event.preventDefault();
    
    const newCard = {
      id: this.state.id,
      text: this.state.text,
      emoji: this.state.emoji,
    }

    this.props.addCardCallback(newCard);

    this.setState({
      id: '',
      text: '',
    });
  }

  emojiMenu = () => {
    const emojis = EMOJI_LIST.map((emojiStr, i) => {
      return (
        <option 
          value={emojiStr} 
          key={i}>{emoji.getUnicode(emojiStr)}
        </option>
      );
    })
  }


  render() {

    return (
      <div className="NewCardForm">
        <h3 className='new-card-form__header'>Submit Inspiration Note</h3>

        <form className="new-card-form__form" onSubmit={this.onSubmitCard}>

          <div className="new-card-form__form-label">
            <input
              name="text"
              placeholder="Inspirational note here"
              type="text" 
              className="new-card-form__form-textarea"
              onChange={this.onInputChange}
              value={this.state.text}
            />
          </div>

          <div className="new-card-form__form-label">
            <input
              name="emoji"
              className="new-card-form__form-select"
              onChange={this.onInputChange}
              value={this.state.emoji}
            />
            {this.emojiMenu()}
          </div>

          <div className="NewCardForm__submit">
            <input type="submit" value="Submit Note" className="new-card-form__form-button" />
          </div>
        </form>
      </div>
    ); 
  }
}

export default NewCardForm;

