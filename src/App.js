import React from 'react';
import HeadBar from './components/HeadBar';
import Color from './components/Color';
import About from './components/About';

class App extends React.Component
{
    render()
    {
        return (
            <div>
                <HeadBar />

                <Color />

                <About />
            </div>
        );
    }
}

export default App;