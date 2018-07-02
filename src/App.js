import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HeadBar from './components/HeadBar';
import Red from './components/Red';
import Blue from './components/Blue';
import Green from './components/Green';
import Yellow from './components/Yellow';
import About from './components/About';

class App extends React.Component
{
    render()
    {
        return (
            <div>
                <HeadBar />

                {/** 
                    This condition needs to be outside the Switch component
                    otw the component red wouldn't be rendered
                */}
                { this.props.onRed && <Redirect to='/red' /> }
                <Switch>
                    <Route path='/red' component={ Red } />
                    <Route path='/blue' component={ Blue } />
                    <Route path='/green' component={ Green } />
                    <Route path='/yellow' component={ Yellow } />
                    <Redirect to='/red' />
                </Switch>

                <About />
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

export default connect( mapStateToProps )( App );