import React from 'react';

import Chart from 'chart.js';

let labels = [];
let cases = [];
class State extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		this.props.stats.map((stat) => {
			labels.push(stat.loc);
			cases.push(stat.totalConfirmed);
		});

		var state_ctx = document.getElementById('stateBarChart');
		new Chart(state_ctx, {
			type: 'horizontalBar',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Confirmed Cases',
						data: cases,
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
	}

	render() {
		return <canvas id='stateBarChart'></canvas>;
	}
}

export default State;
