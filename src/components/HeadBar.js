import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from '../common/HeadBar.css';
import { toggleColor } from '../redux/action';

class HeadBar extends React.Component
{
    constructor( props )
    {
        super( props );

        this.handleToggle = this.handleToggle.bind( this );
    }

    handleToggle( e )
    {
        this.props.toggleState( e.target.id );
    }

    render()
    {
        return (
            <div styleName='container'>
                <span styleName='title'>Click</span>
                {/** 
                    My Note:
                    Every tag has different event target property; thus, not all tag
                    can use event.target.value and event.target.name.
                    For this instance, the Component NavLink requires id to pass a 
                    value to event target.
                */}
                <span onClick={ this.handleToggle } id='onRed' to='/red' styleName='btn red'>
                    <div id='onRed' styleName={ this.props.onRed ? 'content-on' : 'content-off' }>Red</div>
                </span>

                <span onClick={ this.handleToggle } id='onBlue' to='/blue' styleName='btn blue'>
                    <div id='onBlue' styleName={ this.props.onBlue ? 'content-on' : 'content-off' }>Blue</div>
                </span>

                <span onClick={ this.handleToggle } id='onGreen' to='/green' styleName='btn green'>
                    <div id='onGreen' styleName={ this.props.onGreen ? 'content-on' : 'content-off' }>Green</div>
                </span>

                <span onClick={ this.handleToggle } id='onYellow' to='/yellow' styleName='btn yellow'>
                    <div id='onYellow' styleName={ this.props.onYellow ? 'content-on' : 'content-off' }>Yellow</div>
                </span>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    onRed: state.onRed,
    onBlue: state.onBlue,
    onGreen: state.onGreen,
    onYellow: state.onYellow
});

const mapDispatchToProps = dispatch => ({
    toggleState: target => dispatch( toggleColor( target ) )
});

const HeadBarWithCSS = CSSModules( HeadBar, styles, { allowMultiple: true } );

export default connect( mapStateToProps, mapDispatchToProps )( HeadBarWithCSS );