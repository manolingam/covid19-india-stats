import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Charts from './pages/Charts/Charts';
import Pie from './components/Pie/Pie';
import Nav from './components/Nav/Nav';

import logo from './assets/logo.png';

import './App.css';
import './ribbon.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	async componentDidMount() {
		let stateStats;
		let districtStats;
		let historyStats;

		await fetch('https://api.rootnet.in/covid19-in/stats/history')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				historyStats = data;
			});

		await fetch('https://api.rootnet.in/covid19-in/stats/latest')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				stateStats = data;
			});

		await fetch('https://api.covid19india.org/state_district_wise.json')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				districtStats = data;
			});

		this.setState({
			stateStats: stateStats,
			districtStats: districtStats,
			historyStats: historyStats,
			totalPrevious:
				historyStats.data[historyStats.data.length - 2].summary.total,
			totalCurrent: stateStats.data.summary.total,
			confirmedIndianPrevious:
				historyStats.data[historyStats.data.length - 2].summary
					.confirmedCasesIndian,
			confirmedIndianCurrent:
				stateStats.data.summary.confirmedCasesIndian,
			confirmedForeignPrevious:
				historyStats.data[historyStats.data.length - 2].summary
					.confirmedCasesForeign,
			confirmedForeignCurrent:
				stateStats.data.summary.confirmedCasesForeign,
			dischargedPrevious:
				historyStats.data[historyStats.data.length - 2].summary
					.discharged,
			dischargedCurrent: stateStats.data.summary.discharged,
			deathPrevious:
				historyStats.data[historyStats.data.length - 2].summary.deaths,
			deathCurrent: stateStats.data.summary.deaths,
		});
	}

	render() {
		return this.state.districtStats ? (
			<div className='app'>
				<div className='container'>
					<div className='corner-ribbon top-left sticky red shadow'>
						<a className='white' href='https://ipfs.io/'>
							Design by Mano
						</a>
					</div>
					<Router>
						<Route exact path='/'>
							<div className='nav-container'>
								<img
									src={logo}
									height='100px'
									width='auto'
									alt='logo'
									id='logo'
								></img>
								<p id='app-title'>Covid-19 India Stats</p>
								<Nav stats={this.state} />
								<Pie
									total={
										this.state.stateStats.data.summary.total
									}
									discharged={
										this.state.stateStats.data.summary
											.discharged
									}
									deaths={
										this.state.stateStats.data.summary
											.deaths
									}
								/>
								<Link to='/charts'>View more</Link>
							</div>
						</Route>
						<Route exact path='/charts'>
							<Charts
								countrydata={this.state.historyStats}
								statedata={this.state.stateStats.data.regional}
								districtdata={
									this.state.districtStats['Tamil Nadu']
								}
							/>
						</Route>
					</Router>
				</div>
			</div>
		) : (
			<div></div>
		);
	}
}

export default App;
