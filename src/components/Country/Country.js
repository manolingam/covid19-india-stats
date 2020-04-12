import React from 'react';

import Chart from 'chart.js';

let labels = [];
let cases = [];
let history;
let country_ctx;

class Country extends React.Component {
	componentDidMount() {
		history = this.props.stats;

		history.data.map((stat) => {
			labels.push(stat.day);
			cases.push(stat.summary.total);
		});

		country_ctx = document.getElementById('countryChart');
		new Chart(country_ctx, {
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
	}

	render() {
		return <canvas id='countryChart'></canvas>;
	}
}

export default Country;
