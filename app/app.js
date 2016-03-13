import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Landing from './landing/Landing';

injectTapEventPlugin();

ReactDOM.render(<Landing />,document.getElementById('my-page'));
