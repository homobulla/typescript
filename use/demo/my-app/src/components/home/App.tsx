import * as React from 'react'
import './App.css'
import { getUser } from '../../utils/axios'
getUser()
class App extends React.Component {
    public render() {
        return (
            <header className="App">
                <p>hb's blog</p>
                <ul className="header-list">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </header>
        )
    }
}

export default App
