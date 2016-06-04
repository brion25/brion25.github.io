import React, {
  Component
} from 'react';
import classnames from 'classnames';
import moment from 'moment';

class Twitter extends Component{
  constructor(props){
    super(props);
    this.state = {
      tweets : ''
    };

    let self = this;

    twitterFetcher.fetch({
      id: '737118570505592833',
      domId: '',
      maxTweets: 10,
      enableLinks: true,
      showUser: true,
      showTime: true,
      dateFunction: date => {
        return moment(date).fromNow();
      },
      showImages : true,
      showRetweet: true,
      customCallback: self.handleTweets.bind(self),
      showInteraction: false
    });
  }

  handleTweets(tweets){
    this.props.toogleLoading();
    tweets = '<div class="tweet-wrapper" ref="">'+tweets+'</div>';
    tweets = tweets.replace(/>,</g,'></div><div class="tweet-wrapper"><');
    this.setState({
      tweets : tweets
    });
    setTimeout(() => {
      let tweetsRendered = document.getElementsByClassName('tweet');
      for(let i = 0 ; i < tweetsRendered.length ; i++){
        let tweetRendered = tweetsRendered[i].innerHTML;
        tweetsRendered[i].innerHTML = tweetRendered.replace(/\n/g,'<br />');
      }
    },100);
  }

  render(){
    return(
      <div className={classnames('content')}>
        <div className="tweets" dangerouslySetInnerHTML={{__html: this.state.tweets}}></div>
      </div>
    );
  }
}

export default Twitter;
