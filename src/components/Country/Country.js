import React from 'react';

import Chart from 'chart.js';

let labels = [];
let cases = [];

class Country extends React.Component {
	componentDidMount() {
		let history = this.props.stats;

		history.data.map((stat) => {
			labels.push(stat.day);
			cases.push(stat.summary.total);
		});

		var ctx = document.getElementById('countryChart');
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
