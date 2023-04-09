import {  selectEarningsState } from '@modules/financial-records/infrastructure/store/financial-records.slice';
import CardPointsComponent from '@shared/modules/app/infrastructure/ui/components/card-points/card-points.component';
import React from 'react';
import { useSelector } from 'react-redux';

const CardPointsController = () => { 

	const rawEarnings = useSelector(selectEarningsState);

	const stringEarnings: number = parseFloat(rawEarnings.toString() || '');


	const formatedEarnings = new Intl.NumberFormat('es-PY', {
		minimumFractionDigits: 2,

	}).format(stringEarnings);

	return <CardPointsComponent
		testID='records.item-earning-text'
		title='Diciembre' 
		value={formatedEarnings}
	/>;
};

export default CardPointsController;