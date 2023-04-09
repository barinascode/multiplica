import React, { useEffect } from 'react';
import MainScreen from '../screens/main/main.screen';
import useFinancialRecordsResume from '@modules/financial-records/infrastructure/ui/hooks/useFinancialRecordsResume';

/*
	<MainScreenController />

   	The <MainScreenController /> is the first screen that the user see when the app is open
	This controller is exposed by the navigation component
	
	@role Controller
	
	@see MainScreen
	
	@see NavigationComponent
	
	@params none
	
	@returns JSX.Element

 */

const MainScreenController: React.FC = ():JSX.Element => {
	
	// Fetch the financial resume and populate the store
	const {fetchFinancialResume} = useFinancialRecordsResume();
    
	useEffect(() => {
		fetchFinancialResume();
	}, []);

	return <MainScreen />;

};

export default MainScreenController;


