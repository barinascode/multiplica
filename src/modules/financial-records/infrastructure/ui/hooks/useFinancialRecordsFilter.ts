import { useSelector } from 'react-redux';
import { selectAllExpenseFinancialRecords, selectAllFinancialRecords, selectAllIncomeFinancialRecords, selectFilterState } from '../../store/financial-records.slice';

const useFinancialRecordsFilter = () => {

	const filterState = useSelector(selectFilterState);
    
	const filterSelector =  {
		
		all: ()=> useSelector(selectAllFinancialRecords),

		expense: ()=> useSelector(selectAllExpenseFinancialRecords),

		income: ()=> useSelector(selectAllIncomeFinancialRecords),
	};

	return { filteredRecords : filterSelector[filterState]() };
};

export default useFinancialRecordsFilter;