import React from 'react';

import arrow from '../../assets/up.png';

import './styles.css';

const Nav = (props) => {
	console.log(props);
	return (
		<nav className='nav'>
			<div className='num-div'>
				<p className='overall-count' id='cases'>
					Cases: {props.stats.statewise[0].confirmed}
				</p>

				<div className='increase-stat animated flash'>
					<p>{props.stats.statewise[0].deltaconfirmed}</p>
					<img className='arrow' src={arrow} alt='arrow'></img>
				</div>
			</div>
			<div className='active'>
				<p id='active' className='overall-count'>
					Active: {props.stats.statewise[0].active}
				</p>
			</div>
			<div className='num-div'>
				<p id='recovered' className='overall-count'>
					Recovered: {props.stats.statewise[0].recovered}
				</p>

				<div className='increase-stat animated flash'>
					<p>{props.stats.statewise[0].deltarecovered}</p>
					<img className='arrow' src={arrow} alt='arrow'></img>
				</div>
			</div>
			<div className='num-div'>
				<p className='overall-count'>
					Deaths: {props.stats.statewise[0].deaths}
				</p>

				<div className='increase-stat animated flash'>
					<p>{props.stats.statewise[0].deltadeaths}</p>
					<img className='arrow' src={arrow} alt='arrow'></img>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
