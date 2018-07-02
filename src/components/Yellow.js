import React from 'react';
import styles from '../common/Color.css';
import CSSModules from 'react-css-modules';

class Yellow extends React.Component
{
    render()
    {
        return (
            <div style={{ color: '#e5b72b' }} styleName='container'>
                <h1 context='Yellow' styleName='title'></h1>
            </div>
        );
    }
}

export default CSSModules( Yellow, styles );