import React, { Component } from "react";
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry/error-boundry";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        swapiService: new SwapiService(),
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
            return {
                swapiService: new Service(),
            }
        })
    }

    render() {
        const { hasError } = this.state
        if (hasError) {
            return <ErrorIndicator />
        }
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <Router>
                        <div className="stardb-app" >
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />
                            <Routes>
                                <Route path="/" element={<h2>Welcome to Star-DB</h2>} />
                                <Route path="/people" element={<PeoplePage/>} />
                                <Route path="/planets" element={<PlanetsPage/>} />
                                <Route path="/starships" element={<StarshipsPage/>} />
                            </Routes>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    };
};