import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Chart from 'chart.js';

import Pie from './components/Pie/Pie';
import Nav from './components/Nav/Nav';

import logo from './assets/logo.png';

import './App.css';
import './ribbon.css';

let history;
let historyLabels = [];
let historyCases = [];

let stateLabels = [];
let stateCases = [];

let districtLabels = [];
let districtCases = [];

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

		this.state.stateStats.data.regional.map((stat) => {
			stateLabels.push(stat.loc);
			stateCases.push(stat.totalConfirmed);
		});

		let districts = this.state.districtStats['Tamil Nadu'].districtData;
		console.log(districts);

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
						backgroundColor: 'rgba(255, 99, 132, 0.2)',
						borderColor: 'rgba(255, 99, 132, 1)',
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
								display: true,
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

		let state_ctx = document.getElementById('stateBarChart');
		new Chart(state_ctx, {
			type: 'horizontalBar',
			data: {
				labels: stateLabels,
				datasets: [
					{
						label: 'Confirmed Cases',
						data: stateCases,
						backgroundColor: 'rgba(255, 99, 132, 0.2)',
						borderColor: 'rgba(255, 99, 132, 1)',
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
								display: false,
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
						backgroundColor: 'rgba(255, 99, 132, 0.2)',
						borderColor: 'rgba(255, 99, 132, 1)',
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
								display: true,
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

		this.setState(
			{
				stateStats: stateStats,
				districtStats: districtStats,
				historyStats: historyStats,
				totalPrevious:
					historyStats.data[historyStats.data.length - 2].summary
						.total,
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
					historyStats.data[historyStats.data.length - 2].summary
						.deaths,
				deathCurrent: stateStats.data.summary.deaths,
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
						<div className='corner-ribbon top-left sticky red shadow'>
							<a className='white' href='https://ipfs.io/'>
								Design by Mano
							</a>
						</div>

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
								total={this.state.stateStats.data.summary.total}
								discharged={
									this.state.stateStats.data.summary
										.discharged
								}
								deaths={
									this.state.stateStats.data.summary.deaths
								}
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
