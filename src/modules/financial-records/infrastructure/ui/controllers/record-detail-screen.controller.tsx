import React from 'react';
import { useSelector } from 'react-redux';
import { selectActiveItemState } from '../../store/financial-records.slice';
import RecordDetailScreen from '../screens/record-detail/record-detail.screen';
import type { mapedUseNavigationType } from '@shared/modules/app/domain/entities/root.stack.type';
import { useNavigation } from '@react-navigation/native';

const RecordDetailScreenController: React.FC = ():JSX.Element => {

	const selectedRecord = useSelector(selectActiveItemState);

	const navigation = useNavigation<mapedUseNavigationType>();
	
	// Handler to return to main screen
	const onAcceptHandler = () => navigation.navigate('MainScreen');

	return <RecordDetailScreen
		record={selectedRecord}
		onAccept={onAcceptHandler}
	/>;

};

export default RecordDetailScreenController;