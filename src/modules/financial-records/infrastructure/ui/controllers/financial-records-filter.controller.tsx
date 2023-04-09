import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { financialRecordsActions, selectFilterState } from '../../store/financial-records.slice';
import FinancialRecordsFilterComponent from '../components/financial-records-filter/financial-records-filter.component';

const FinancialRecordsFilterController: React.FC = () => {

	const dispatch = useDispatch();
	const filterState = useSelector(selectFilterState);
	
	const onPressDisplayAllRecords = () => dispatch(financialRecordsActions.setFilter('all'));
	
	const onPressDisplayExpenseRecords = () => dispatch(financialRecordsActions.setFilter('expense'));

	const onPressDisplayIncomeRecords = () => dispatch(financialRecordsActions.setFilter('income'));


	return <FinancialRecordsFilterComponent
		onPressDisplayAllRecords={onPressDisplayAllRecords}
		onPressDisplayExpenseRecords={onPressDisplayExpenseRecords}
		onPressDisplayIncomeRecords={onPressDisplayIncomeRecords}
		filter={filterState}
	/>;
};

export default FinancialRecordsFilterController;