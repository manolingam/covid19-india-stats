import React from 'react';

import Chart from 'chart.js';

import State from './components/State/State';
import District from './components/District/District';

import logo from './assets/logo.png';

import './App.css';

let labels = [];
let cases = [];
class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	getChartData = (history) => {
		history.data.map((stat) => {
			labels.push(stat.day);
			cases.push(stat.summary.total);
		});
	};

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

		this.getChartData(historyStats);

		this.setState(
			{
				stateStats: stateStats,
				districtStats: districtStats,
				historyStats: historyStats,
			},
			() => {
				var ctx = document.getElementById('myChart');
				var myLineChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: labels,
						datasets: [
							{
								label: 'Confirmed Cases',
								data: cases,
								backgroundColor: 'rgba(255, 99, 132, 0.2)',
								borderColor: 'rgba(255, 99, 132, 1)',
								borderWidth: 1,
							},
						],
					},
				});
			}
		);
	}

	render() {
		return this.state.districtStats ? (
			<div className='app'>
				<div className='container'>
					<section className='page-1'>
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
									{this.state.stateStats.data.summary.total}
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
									{this.state.stateStats.data.summary.deaths}
								</p>
							</nav>
						</div>
						<canvas id='myChart'></canvas>
					</section>
					<section>
						<State stats={this.state.stateStats.data.regional} />
					</section>
					<section>
						<District
							stats={this.state.districtStats['Tamil Nadu']}
						/>
					</section>
				</div>
			</div>
		) : (
			<div></div>
		);
	}
}

export default App;
