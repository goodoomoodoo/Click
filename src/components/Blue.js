import React from 'react';
import styles from '../common/Color.css';
import CSSModules from 'react-css-modules';

class Blue extends React.Component
{
    render()
    {
        return (
            <div style={{ color: 'rgba(76, 147, 228, 0.9)' }} styleName='container'>
                <h1 context='Blue' styleName='title'></h1>
            </div>
        );
    }
}

export default CSSModules( Blue, styles );