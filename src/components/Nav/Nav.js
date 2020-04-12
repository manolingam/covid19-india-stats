import React from 'react';

import arrow from '../../assets/up.png';

import './styles.css';

const Nav = (props) => {
	const {
		totalCurrent,
		totalPrevious,

		confirmedIndianCurrent,
		confirmedIndianPrevious,

		confirmedForeignCurrent,
		confirmedForeignPrevious,

		dischargedCurrent,
		dischargedPrevious,

		deathCurrent,
		deathPrevious,
	} = props.stats;

	let total = props.stats.stateStats.data.summary.total;
	let confirmedCasesIndian =
		props.stats.stateStats.data.summary.confirmedCasesIndian;
	let confirmedCasesForeign =
		props.stats.stateStats.data.summary.confirmedCasesForeign;
	let discharged = props.stats.stateStats.data.summary.discharged;
	let deaths = props.stats.stateStats.data.summary.deaths;

	return (
		<nav className='nav'>
			<div className='num-div'>
				<p className='overall-count' id='cases'>
					Cases: {total}
				</p>
				{totalCurrent > totalPrevious ? (
					<div className='increase-stat animated flash'>
						<p>{totalCurrent - totalPrevious}</p>
						<img src={arrow} alt='arrow'></img>
					</div>
				) : (
					<div></div>
				)}
			</div>
			<div className='num-div'>
				<p id='indian' className='overall-count'>
					Indian Cases: {confirmedCasesIndian}
				</p>
				{confirmedIndianCurrent > confirmedIndianPrevious ? (
					<div className='increase-stat animated flash'>
						<p>
							{confirmedIndianCurrent - confirmedIndianPrevious}
						</p>
						<img src={arrow} alt='arrow'></img>
					</div>
				) : (
					<div></div>
				)}
			</div>
			<div className='num-div'>
				<p id='foreign' className='overall-count'>
					Foreign Cases: {confirmedCasesForeign}
				</p>
				{confirmedForeignCurrent > confirmedForeignPrevious ? (
					<div className='increase-stat animated flash'>
						<p>
							{confirmedForeignCurrent - confirmedForeignPrevious}
						</p>
						<img src={arrow} alt='arrow'></img>
					</div>
				) : (
					<div></div>
				)}
			</div>
			<div className='num-div'>
				<p id='recovered' className='overall-count'>
					Recovered: {discharged}
				</p>
				{dischargedCurrent > dischargedPrevious ? (
					<div className='increase-stat animated flash'>
						<p>{dischargedCurrent - dischargedPrevious}</p>
						<img src={arrow} alt='arrow'></img>
					</div>
				) : (
					<div></div>
				)}
			</div>
			<div className='num-div'>
				<p className='overall-count'>Deaths: {deaths}</p>
				{deathCurrent > deathPrevious ? (
					<div className='increase-stat animated flash'>
						<p>{deathCurrent - deathPrevious}</p>
						<img src={arrow} alt='arrow'></img>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</nav>
	);
};

export default Nav;
