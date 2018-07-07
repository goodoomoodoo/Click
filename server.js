import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import express from 'express';

// React component to be rendered
import App from './views/App';

// HTML template to mount content to
import { template } from './template';

import { configureStore } from './views/redux/store';

// The initial value of each color tab
const initialState = {
    onRed: true,
    onBlue: false,
    onGreen: false,
    onYellow: false
}

// Field: server side initialization
const store = configureStore( initialState );
const app = express();
const PORT = process.env.PORT || 3000;

// Host the static file
app.use( express.static('public') );

app.get( '/*', ( req, res ) => {
    // server side rendered html content
    let content = renderToString(
        <Provider store={ store }>
            <App />
        </Provider>
    );

    // returns HTML that contains the content and the state in string
    let indexHTML = template( content, initialState );

    res.send( indexHTML );
});

// serving on given port or port 3000
app.listen( PORT, () => {
    console.log( `Listenting on port ${ PORT } ...`);
});