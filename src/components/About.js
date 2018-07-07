import React from 'react';
import styles from '../common/About.css';
import CSSModules from 'react-css-modules';

class About extends React.Component
{
    render()
    {
        return (
            <div styleName='container'>
                <h1>What's so special?</h1>
                <p>
                    This is your ordinary static website, but the content is actually rendered on Server.
                    It uses Expressjs + Nodejs to host and render the content. This static website also 
                    uses many popular frameworks and libraries:
                    <li>React</li>
                    <li>Redux</li>
                    <li>React CSS Modules</li>
                    <li>React Router</li>
                    <li>Etc.</li>
                </p>
                <h1>Why create this?</h1>
                <p>
                    For a long time, frontend has been the only area I've got in touch with, so I've been
                    thinking of learning topics pertaining to backend. This project includes on of the combination
                    I've wanted to learn Expressjs + Nodejs. Frankly, this is rather a small and unsignificant
                    web app but it serves as a milestone of the eventual goal that I've been seeking for since the start. 
                </p>
                <h1>More...</h1>
                <p>
                    Little information is given here, for this is just a test site. If you want to see the code, you can go to
                    this link:
                    <li><a href='https://github.com/goodoomoodoo/Click'>The code</a></li>
                </p>
                <p>
                    Or if you want to learn more about me, you can go to these links:
                    <li><a href='http://arvinlin.link'>My personal website</a></li>
                    <li><a href='https://www.linkedin.com/in/arvin-lin'>LinkedIn</a></li>
                </p>
            </div>
        );
    }
}

export default CSSModules( About, styles );