import React from 'react';
import styles from '../common/Color.css';
import CSSModules from 'react-css-modules';

class Red extends React.Component
{
    render()
    {
        return (
            <div style={{ color: 'rgba(226, 95, 95, .8)' }} styleName='container'>
                <h1 context='Red' styleName='title'></h1>
            </div>
        );
    }
}

export default CSSModules( Red, styles );