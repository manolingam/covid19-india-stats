import React from 'react';

import Chart from 'chart.js';

import './styles.css';

let labels = [];
let cases = [];
class State extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	async componentDidMount() {
		await this.props.stats.map((stat) => {
			labels.push(stat.loc);
			cases.push(stat.totalConfirmed);
		});
		var ctx = document.getElementById('stateBarChart');
		var myBarChart = new Chart(ctx, {
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
		});
	}

	render() {
		return (
			<div className='regional-stats'>
				<canvas id='stateBarChart'></canvas>
			</div>
		);
	}
}

export default State;
