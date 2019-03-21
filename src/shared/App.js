import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Nav, Tab1, Tab2, Tab3, Search, Dashboard } from 'pages';
import './App.css'


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header-box">
                    <header className="App-header">
                        <div className="App-header-left">
                            <img className="App-logo" />
                            <h1 className="App-title">마케팅 시스템 114 1.0.0.204</h1>
                            <h5 className="App-title">브라이트부동산 중개법인</h5>
                        </div>
                        <div className="App-header-right">
                            <p className="App-time">2018-04-27 hh:mm:ss kim</p>
                            <button className="App-btn-buildingLedger btn-style-black">건축물 대장</button>
                            <img className="App-setting" />
                        </div>
                    </header>
                    <Nav />
                </div>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/tab1" component={Tab1} />
                <Route exact path="/tab2" component={Tab2} />
                <Route exact path="/tab3" component={Tab3} />
                <Route exact path="/search" component={Search} />
            </div>
        );
    }
}

export default App;