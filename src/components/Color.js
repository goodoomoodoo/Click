import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from '../common/Color.css';
import cx from 'classnames/bind';

class Color extends React.Component 
{
    render()
    {
        let classNames = cx.bind( styles );

        let colorStyle = classNames({
            red: this.props.onRed,
            blue: this.props.onBlue,
            green: this.props.onGreen,
            yellow: this.props.onYellow
        });

        let colorText = this.props.onRed   ? 'Red'   :
                        this.props.onBlue  ? 'Blue'  :
                        this.props.onGreen ? 'Green' :
                        'Yellow';

        return( 
            <div styleName='container' className={ colorStyle }>
                <h1 context={ colorText } styleName='title'></h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    onRed: state.onRed,
    onBlue: state.onBlue,
    onGreen: state.onGreen,
    onYellow: state.onYellow    
})

const ColorWithCss = CSSModules( Color, styles, { allowMultiple: true } );

export default connect( mapStateToProps )( ColorWithCss );