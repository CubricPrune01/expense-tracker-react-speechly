import React from 'react';
import reactDom from 'react-dom';
import {SpeechProvider} from '@speechly/react-client'

import {Provider} from './context/context'
import App from './app';
import './index.css';

reactDom.render(
    <SpeechProvider appId="get app id from speechly" language="en-US">
        <Provider>
            <App /> 
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);