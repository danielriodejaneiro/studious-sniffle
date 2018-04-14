import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <main className="App">
                <article className="main-container">
                    <section className="face">
                        <div className="eyes-row">
                            <div className="eye"></div>
                            <div className="eye"></div>
                        </div>
                        <div className="nose-mouth">
                            <div className="nose"></div>
                            <div className="mouth"></div>
                        </div>
                    </section>
                </article>
                <footer className="control-panel">
                    <h1 className="App-title">Welcome to React</h1>
                    <div className="controls">
                        <button>Start</button>
                        <input type="button" value="Stop"/>
                    </div>
                </footer>
            </main>
        );
    }
}

export default App;
