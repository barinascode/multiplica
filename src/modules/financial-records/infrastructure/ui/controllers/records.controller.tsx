import React, { memo } from 'react';
import ItemPlaceholder from '../components/records/item-placeholder/item-placeholder.component';
import useFinancialRecordsFilter from '../hooks/useFinancialRecordsFilter';
import RecordListComponent from '../components/records/list/record.list.component';
import PaperComponent from '@shared/modules/app/infrastructure/ui/components/paper/paper.component';
import type { FinancialRecordEntity } from '@modules/financial-records/domain/entities/financial-record.entity';
import type { mapedUseNavigationType } from '@shared/modules/app/domain/entities/root.stack.type';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { financialRecordsActions } from '../../store/financial-records.slice';



const RecordsController:React.FC = () => {

	const dispatch = useDispatch();
	const {filteredRecords} = useFinancialRecordsFilter();
	const navigation = useNavigation<mapedUseNavigationType>();
	
	const onPressRecord = function (_record: FinancialRecordEntity): void {
		
		dispatch(financialRecordsActions.setActiveItem(_record));
		
		navigation.navigate('RecordDetailScreen');
	};

	if (filteredRecords.length === 0)
		return <PaperComponent>
			<ItemPlaceholder testID='records.item-placeholder-1'/>
			<ItemPlaceholder testID='records.item-placeholder-2' />
			<ItemPlaceholder testID='records.item-placeholder-3' />
			<ItemPlaceholder testID='records.item-placeholder-4' />
		</PaperComponent>;


	return <RecordListComponent
		records={filteredRecords}
		onPress={onPressRecord}
	/>;

};
	
export default memo(RecordsController);