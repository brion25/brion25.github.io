import React,{
  Component
} from 'react';
import classNames from 'classnames';

import Card from './../common/components/Card';

class Github extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    let cardHeader = (
      <span>
        <a href="https://github.com/brion25">brion25 </a> Contributions
      </span>
    );
    return(
      <div className={classNames('column','github')}>
        <Card cardHeader={cardHeader} cardStyle={['card-style-2',this.state.cardStyle]} goBack={true}>
          <img src="http://ghchart.rshah.org/brion25" className={classNames('github-contributions')} />
        </Card>
      </div>
    );
  }
}

export default Github;
