import React from 'react';
import styles from '../common/Color.css';
import CSSModules from 'react-css-modules';

class Green extends React.Component
{
    render()
    {
        return (
            <div style={ { color: '#20a100' } } styleName='container'>
                <h1 context='Green' styleName='title'></h1>
            </div>
        );
    }
}

export default CSSModules( Green, styles );