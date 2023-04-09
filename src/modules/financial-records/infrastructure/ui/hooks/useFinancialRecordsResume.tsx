import { container } from 'tsyringe';
import { useEffect, useState } from 'react';
import type FetchFinancialRecordsUseCase from '@modules/financial-records/application/fetch-financial-records.useCase';
import type { FinancialRecordEntity } from '@modules/financial-records/domain/entities/financial-record.entity';
import { financialRecordsActions } from '../../store/financial-records.slice';
import { useDispatch } from 'react-redux';


const useFinancialRecordsResume = () => {

	const fetchFinancialRecordsUseCase = container.resolve<FetchFinancialRecordsUseCase>('FetchFinancialRecordsUseCase');
	const dispatch = useDispatch();
	const [earnings, setEarnings] = useState(0);
	const [records, setRecords] = useState<FinancialRecordEntity[]>([]);
    
	useEffect(() => {
		dispatch(financialRecordsActions.setEarnings(earnings));
		dispatch(financialRecordsActions.addFinancialRecords(records));
	}, [earnings, records]);
	
	const fetchFinancialResume = () => {
		fetchFinancialRecordsUseCase
			.execute().then((result) => {
				setRecords(result.data);
				setEarnings(result.earnings);
			});
	};

	return {records, earnings, fetchFinancialResume };
	
};

export default useFinancialRecordsResume;