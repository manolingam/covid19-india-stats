import React from 'react';

import Chart from 'chart.js';

import Country from '../../components/Country/Country';
import State from '../../components/State/State';
import District from '../../components/District/District';

Chart.defaults.global.defaultFontFamily = "'Share Tech Mono', monospace";
Chart.defaults.global.legend.align = 'end';

class Charts extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	async componentDidMount() {}

	render() {
		return (
			<div>
				<section>
					<div className='chart-container'>
						<Country stats={this.props.countrydata} />
					</div>
				</section>
				<section>
					<div className='chart-container'>
						<State stats={this.props.statedata} />
					</div>
				</section>
				<section>
					<div className='chart-container'>
						<District stats={this.props.districtdata} />
					</div>
				</section>
			</div>
		);
	}
}

export default Charts;
