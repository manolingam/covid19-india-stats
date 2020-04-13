import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './styles.css';

const StyledTableCell = withStyles((theme) => ({
	root: {
		padding: '10px',
	},
	head: {
		backgroundColor: 'white',
		color: '#fe346e',
		fontFamily: "'Share Tech Mono', monospace",
		fontSize: 12,
	},
	body: {
		fontSize: 10,
		fontFamily: "'Share Tech Mono', monospace",
	},
	padding: '10px',
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	container: {
		maxHeight: 440,
	},
});

const StateTable = (props) => {
	const classes = useStyles();

	return (
		<div className='regional-stats'>
			<Paper className={classes.root}>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label='sticky table'>
						<TableHead>
							<TableRow>
								<StyledTableCell>State</StyledTableCell>
								<StyledTableCell align='right'>
									Confirmed
								</StyledTableCell>
								<StyledTableCell align='right'>
									Cured
								</StyledTableCell>
								<StyledTableCell align='right'>
									Deaths
								</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{props.stats.map((stat, index) => (
								<StyledTableRow key={index}>
									<StyledTableCell component='th' scope='row'>
										{stat.state}
									</StyledTableCell>
									<StyledTableCell align='right'>
										{stat.confirmed}
									</StyledTableCell>
									<StyledTableCell align='right'>
										{stat.recovered}
									</StyledTableCell>
									<StyledTableCell align='right'>
										{stat.deaths}
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</div>
	);
};

export default StateTable;
