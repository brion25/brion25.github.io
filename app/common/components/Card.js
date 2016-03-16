import React,{
  Component
} from 'react';

import classNames from 'classnames';

class Card extends Component{
  render(){
    let cardStyle = this.props.cardStyle;

    return (
      <div className={classNames('card', cardStyle)}>
        <div className={classNames('card-header')}>
          <h2>{this.props.cardHeader}</h2>
        </div>
        <div className={classNames('card-content')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Card;
