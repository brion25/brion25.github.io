import React, { Component } from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import myApp from './reducers';
import Routes from './routes';

injectTapEventPlugin();

String.prototype.toParagraphs = function(){
  let str = this.replace(/\n/g,'<br /> </br>'); 
  return str;
}

let store = createStore(myApp);

function MyAppRoot(props){
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

render(<MyAppRoot />,document.getElementById('my-page'));
