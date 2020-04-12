import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Charts from './pages/Charts/Charts';

import logo from './assets/logo.png';

import './App.css';

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
		});
	}

	render() {
		return this.state.districtStats ? (
			<div className='app'>
				<div className='container'>
					<Router>
						<Route exact path='/'>
							<div className='nav-container'>
								<img
									src={logo}
									height='100px'
									width='auto'
									alt='logo'
								></img>
								<nav className='nav'>
									<p id='cases'>
										Cases:{' '}
										{
											this.state.stateStats.data.summary
												.total
										}
									</p>
									<p id='indian'>
										Indian Cases:{' '}
										{
											this.state.stateStats.data.summary
												.confirmedCasesIndian
										}
									</p>
									<p id='foreign'>
										Foreign Cases:{' '}
										{
											this.state.stateStats.data.summary
												.confirmedCasesForeign
										}
									</p>
									<p id='recovered'>
										Recovered:{' '}
										{
											this.state.stateStats.data.summary
												.discharged
										}
									</p>
									<p>
										Deaths:{' '}
										{
											this.state.stateStats.data.summary
												.deaths
										}
									</p>
								</nav>
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
							<section>
								<div className='chart-container'>
									<canvas id='myChart'></canvas>
								</div>
							</section>
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
