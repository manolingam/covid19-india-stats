import React from 'react';

import Chart from 'chart.js';

let labels = [];
let cases = [];
class District extends React.Component {
	componentDidMount() {
		let districts = this.props.stats.districtData;

		for (var key in districts) {
			labels.push(key);
			cases.push(districts[key].confirmed);
		}

		var district_ctx = document.getElementById('districtBarChart');
		new Chart(district_ctx, {
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
	}

	render() {
		return <canvas id='districtBarChart'></canvas>;
	}
}

export default District;
