import { configureStore } from '@reduxjs/toolkit';
import { FINANCIAL_RECORDS_FEATURE_KEY, financialRecordsReducer } from '@modules/financial-records/infrastructure/store/financial-records.slice';

const store = configureStore({
	reducer: { 
		[FINANCIAL_RECORDS_FEATURE_KEY]: financialRecordsReducer,
		
	},
	// Additional middleware can be passed to this array
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
	// Optional Redux store enhancers
	enhancers: [],
});

export default store;