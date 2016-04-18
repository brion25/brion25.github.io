import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './routes';

injectTapEventPlugin();

ReactDOM.render(Routes,document.getElementById('my-page'));
