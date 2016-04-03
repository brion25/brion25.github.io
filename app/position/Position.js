import React,{
  Component
} from 'react';
import classNames from 'classnames';
import moment from 'moment';

import Card from './../common/components/Card';

class Position extends Component{
  constructor(props){
    super(props);

    let self = this,
        profile = JSON.parse(window.localStorage.getItem('linkedinProfile')),
        positionId = this.props.params.positionId,
        position = profile.positions.values.reduce(function(prev,current){
          if(current.id == positionId){
            prev = current;
          }
          return prev;
        },{});

    this.state = {
      position : position
    }
  }

  render(){
    let startDate = 'From ' + moment(this.state.position.startDate).format('MMMM YYYY'),
        endDate = null;

    if(this.state.position.isCurrent) endDate = 'till now';
    else endDate = 'to ' + moment(this.state.position.endDate).format('MMMM YYYY');

    console.log(this.state.position)
    return (
      <div className={classNames('column','position')}>
        <Card cardHeader={this.state.position.company.name + ' ' +this.state.position.title} cardStyle={['card-style-2',this.state.cardStyle]} goBack={true}>
          <div className={classNames('position-timming')}>
            {startDate +' '+ endDate + ' at ' + this.state.position.location.name}
          </div>
          <div className={classNames('position-summary')}>
            {this.state.position.summary.split('\n').map(this.renderLines.bind(this))}
          </div>
        </Card>
      </div>
    );
  }

  renderLines(line){
    return (
      <div className={classNames('line')}>{line}</div>
    );
  }
}

export default Position;
