import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Chart from 'chart.js';

import Pie from './components/Pie/Pie';
import Nav from './components/Nav/Nav';

import logo from './assets/logo.png';

import './App.css';

let history;
let historyLabels = [];
let historyCases = [];

let stateLabels = [];
let stateCases = [];

let districtLabels = [];
let districtCases = [];

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontFamily = "'Share Tech Mono', monospace";
Chart.defaults.global.defaultFontSize = 10;
class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	drawCharts = () => {
		history = this.state.historyStats;

		history.data.map((stat) => {
			historyLabels.push(stat.day);
			historyCases.push(stat.summary.total);
		});

		let stateStatsObject = this.state.rawStats.statewise.shift();

		this.state.rawStats.statewise.map((stat) => {
			stateLabels.push(stat.state);
			stateCases.push(stat.active);
		});

		let districts = this.state.districtStats['Tamil Nadu'].districtData;

		for (var key in districts) {
			districtLabels.push(key);
			districtCases.push(districts[key].confirmed);
		}

		let district_ctx = document.getElementById('districtBarChart');
		new Chart(district_ctx, {
			type: 'horizontalBar',
			data: {
				labels: districtLabels,
				datasets: [
					{
						label: 'Confirmed Cases',
						data: districtCases,
						backgroundColor: '#d8345f',
						borderColor: '#d8345f',
						borderWidth: 1,

						minBarLength: 5,
					},
				],
			},
			options: {
				title: {
					display: true,
					text: 'Confirmed cases (TamilNadu)',
				},
				maintainAspectRatio: false,
				scales: {
					yAxes: [
						{
							stacked: true,
							gridLines: {
								display: false,
								color: 'rgba(255,99,132,0.2)',
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								display: true,
							},
						},
					],
				},
			},
		});

		let state_ctx = document.getElementById('stateBarChart');
		new Chart(state_ctx, {
			type: 'horizontalBar',
			data: {
				labels: stateLabels,
				datasets: [
					{
						label: 'Confirmed Cases',
						data: stateCases,
						backgroundColor: '#d8345f',
						borderColor: '#d8345f',
						borderWidth: 1,
						minBarLength: 5,
					},
				],
			},
			options: {
				title: {
					display: true,
					text: 'Confirmed cases (State)',
				},
				maintainAspectRatio: false,
				scales: {
					yAxes: [
						{
							stacked: true,
							gridLines: {
								display: false,
								color: 'rgba(255,99,132,0.2)',
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								display: true,
							},
						},
					],
				},
			},
		});

		let country_ctx = document
			.getElementById('countryChart')
			.getContext('2d');
		new Chart(country_ctx, {
			type: 'line',
			data: {
				labels: historyLabels,
				datasets: [
					{
						label: 'Confirmed Cases',
						data: historyCases,
						backgroundColor: 'white',
						borderColor: '#d8345f',
						borderWidth: 1,
					},
				],
			},
			options: {
				title: {
					display: true,
					text: 'Confirmed cases in India',
				},
				maintainAspectRatio: false,
				scales: {
					yAxes: [
						{
							stacked: true,
							gridLines: {
								display: false,
								color: 'rgba(255,99,132,0.2)',
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								display: false,
							},
						},
					],
				},
			},
		});
	};

	async componentDidMount() {
		let rawStats;
		let stateStats;
		let districtStats;
		let historyStats;

		await fetch('https://api.covid19india.org/data.json')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				rawStats = data;
			});

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

		this.setState(
			{
				rawStats: rawStats,
				stateStats: stateStats,
				districtStats: districtStats,
				historyStats: historyStats,
			},
			() => {
				this.drawCharts();
			}
		);
	}

	render() {
		return this.state.districtStats ? (
			<div className='app'>
				<div className='container'>
					<section id='home'>
						<a
							id='developer'
							href='https://manolingam.github.io/portfolio'
							target='_blank'
							rel='noopener noreferrer'
						>
							Design by Mano
						</a>

						<p id='data-source'>* data from Covid19India</p>
						<p id='last-updated'>
							* {this.state.rawStats.statewise[0].lastupdatedtime}
						</p>

						<div className='nav-container'>
							<img
								src={logo}
								height='100px'
								width='auto'
								alt='logo'
								id='logo'
							></img>
							<p id='app-title'>Covid-19 India Stats</p>
							<Nav stats={this.state.rawStats} />
							<Pie
								total={
									this.state.rawStats.statewise[0].confirmed
								}
								active={this.state.rawStats.statewise[0].active}
								discharged={
									this.state.rawStats.statewise[0].recovered
								}
								deaths={this.state.rawStats.statewise[0].deaths}
							/>
							<a href='#country-section'>More</a>
						</div>
					</section>
					<section>
						<div id='country-section' className='chart-container'>
							<canvas id='countryChart'></canvas>
						</div>
						<a href='#state-section'>More</a>
					</section>
					<section>
						<div id='state-section' className='chart-container'>
							<canvas id='stateBarChart'></canvas>
						</div>
						<a href='#district-section'>More</a>
					</section>
					<section>
						<div id='district-section' className='chart-container'>
							<canvas id='districtBarChart'></canvas>
						</div>
						<a href='#home'>Back to top</a>
					</section>
				</div>
			</div>
		) : (
			<div></div>
		);
	}
}

export default App;
