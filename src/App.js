import React from 'react';

import State from './components/State/State';
import District from './components/District/District';

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

		// await fetch('https://corona.lmao.ninja/countries/india')
		// 	.then((res) => {
		// 		return res.json();
		// 	})
		// 	.then((data) => {
		// 		countryStats = data;
		// 	});

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

		this.setState(
			{
				stateStats: stateStats,
				districtStats: districtStats,
			},
			() => {
				console.log(this.state);
			}
		);
	}

	render() {
		return this.state.districtStats ? (
			<div className='container'>
				<div className='nav-container'>
					<img
						src={logo}
						height='100px'
						width='auto'
						alt='logo'
					></img>
					<nav className='nav'>
						<p id='cases'>
							Cases: {this.state.stateStats.data.summary.total}
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
							{this.state.stateStats.data.summary.discharged}
						</p>
						<p>
							Deaths: {this.state.stateStats.data.summary.deaths}
						</p>
					</nav>
				</div>
				<div className='table-container'>
					<State stats={this.state.stateStats.data.regional} />

					<District stats={this.state.districtStats['Tamil Nadu']} />
				</div>
			</div>
		) : (
			<div></div>
		);
	}
}

export default App;
