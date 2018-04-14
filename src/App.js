import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <main className="App">
                <article className="main-container">
                    <section className="face">
                        <div className="eyes-row">
                            <div className="eye">
                                <div className="girl-of-the-eye"></div>
                            </div>
                            <div className="eye">
                                <div className="girl-of-the-eye"></div>
                            </div>
                        </div>
                        <div className="nose-mouth">
                            <div className="nose-row">
                                <div className="nose"></div>
                            </div>
                            <div className="mouth"></div>
                        </div>
                    </section>
                </article>
                <footer className="control-panel">
                    <h1 className="app-title">Welcome to Reactron</h1>
                    <h2 className="app-subtitle">My simple and fake robot</h2>
                    <div className="controls">
                        <button>Reset</button>
                        <button>Share</button>
                        <button>3</button>
                        <input type="button" value="4"/>
                        <input type="button" value="5"/>
                        <input type="button" value="6"/>
                    </div>
                </footer>
            </main>
        );
    }
}

export default App;
