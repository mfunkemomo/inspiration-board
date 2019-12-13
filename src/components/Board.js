import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount(){
    axios.get(this.props.url)
    .then((response) => {
      const cards = response.data.map((entry) => {
        return (
          entry.card 
        )
      })
      this.setState({
        cards: cards
      })
    })
    .catch((error) => {
      this.setState({
        error: 'Something went wrong'
      })
    })
  }

  displayAllCards = () => {
    const allCards = this.state.cards.map((card, i) => {

      return (
        <Card
          key = {i}
          text = {card.text}
        />
        // console.log(card)
      )
    })
    return allCards
  }

  // addNote = (note) => {

  // }

  render() {
    return (
      <div>
        {this.displayAllCards()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
