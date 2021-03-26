import React from 'react';
import reactDom from 'react-dom';
import {SpeechProvider} from '@speechly/react-client'

import {Provider} from './context/context'
import App from './app';
import './index.css';

reactDom.render(
    <SpeechProvider appId="8be46fda-72ab-4212-9cb4-2a88e24f6955" language="en-US">
        <Provider>
            <App /> 
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);