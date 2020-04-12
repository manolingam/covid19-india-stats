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
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 100,
	},
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 440,
	},
});

const District = (props) => {
	const classes = useStyles();

	let districts = props.stats.districtData;

	let districtData = [];

	for (var key in districts) {
		districtData.push({
			district: key,
			confirmed: districts[key].confirmed,
		});
	}

	return (
		<div className='district-stats'>
			<Paper className={classes.root}>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label='sticky table'>
						<TableHead>
							<TableRow>
								<StyledTableCell>District</StyledTableCell>
								<StyledTableCell align='right'>
									Confirmed
								</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{districtData.map((item, index) => (
								<StyledTableRow key={index}>
									<StyledTableCell component='th' scope='row'>
										{item.district}
									</StyledTableCell>
									<StyledTableCell align='right'>
										{item.confirmed}
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

export default District;
