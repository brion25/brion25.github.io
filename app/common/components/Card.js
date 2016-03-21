import React,{
  Component
} from 'react';

import classNames from 'classnames';

import {
  browserHistory
} from 'react-router';

class Card extends Component{
  constructor(props){
    super(props);
    this.state = {
      flippingCards : {'almost-flip-card' : null, 'totally-flip-card' : null}
    }
  }

  render(){
    let cardStyle = this.props.cardStyle,
        cardOptions = null,
        prevOptions = this.props.options,
        self = this;

    if(this.props.goBack){

      if(!(prevOptions instanceof Array)){
        prevOptions = []
      }

      prevOptions.push(
        {
          name : 'Go Back',
          callback : self.goBack,
          parent : self
        }
      );
    }

    if(prevOptions){
      cardOptions = (
        <div className={classNames('row','center-items','wrap-content','center-content')}>
          {prevOptions.map(this.renderOptions.bind(this))}
        </div>
      );
    }

    return (
      <div className={classNames('card', cardStyle, this.state.flippingCards)}>
        <div className={classNames('card-header')}>
          <h2>{this.props.cardHeader}</h2>
        </div>
        <div className={classNames('card-content')}>
          {this.props.children}
        </div>
        {cardOptions}
      </div>
    );
  }

  renderOptions(option, i){
    return (
      <button
        key={'option-'+i}
        className={classNames('card-option')}
        onMouseOver={this.overCard.bind(this,true)}
        onMouseOut={this.overCard.bind(this,false)}
        onClick={option.callback.bind(option.parent,option.url)}
      >
          {option.name}
      </button>
    );
  }

  overCard(flipCard){
    let flippingCards = this.state.flippingCards;
    flippingCards['almost-flip-card'] = flipCard;
    this.setState({
      flippingCards : flippingCards
    });
  }

  goBack(){
    let flippingCards = this.state.flippingCards;
    flippingCards['totally-flip-card'] = true;
    this.setState({
      flippingCards : flippingCards
    });
    setTimeout(function () {
      browserHistory.goBack();
    }, 501);
  }
}

export default Card;
