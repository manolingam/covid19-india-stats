import React from 'react';

import Chart from 'chart.js';

import './styles.css';

let labels = [];
let cases = [];
class District extends React.Component {
	componentDidMount() {
		let districts = this.props.stats.districtData;

		for (var key in districts) {
			labels.push(key);
			cases.push(districts[key].confirmed);
		}

		var ctx = document.getElementById('districtBarChart');
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
			<div className='district-stats'>
				<canvas id='districtBarChart'></canvas>
			</div>
		);
	}
}

export default District;
