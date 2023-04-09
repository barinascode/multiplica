import type { FinancialRecordEntity } from '@modules/financial-records/domain/entities/financial-record.entity';
import type {PayloadAction} from '@reduxjs/toolkit';
import {  createSelector, createSlice } from '@reduxjs/toolkit';
import type StoreStateTypes from '@shared/modules/app/infrastructure/store/store.types';

export const FINANCIAL_RECORDS_FEATURE_KEY = 'financialRecords';

// Entity for the state of slice
export interface FinancialRecordsState{
  data: FinancialRecordEntity[];
  filter: FinancialRecorsdFilerType;
  earnings: number;
  activeItem: FinancialRecordEntity | null;
}

// Type for filter
export type FinancialRecorsdFilerType = 'all' | 'income' | 'expense';

// Initial state of slice
export const initialFinancialRecordsState: FinancialRecordsState ={
	// Setting default data will be consumed by selectors
	data: [],
	// Setting default filter value
	filter: 'all',
	// Setting default earnings value
	earnings: 0,
	// Setting default active item
	activeItem: null,
};

// Create slice for financial records
export const financialRecordsSlice = createSlice({
	name: FINANCIAL_RECORDS_FEATURE_KEY,
	initialState: initialFinancialRecordsState,
	reducers: {
		// Use this action to add financial records to the state
		addFinancialRecords(state: FinancialRecordsState, action: PayloadAction<FinancialRecordEntity[]>) {
			state.data = action.payload;
		},
		// Use this action to set filter state
		setFilter(state: FinancialRecordsState, action: PayloadAction<FinancialRecorsdFilerType>) {
			state.filter = action.payload;
		},
		// Use this action to set earnings state
		setEarnings(state: FinancialRecordsState, action: PayloadAction<number>) {
			state.earnings = action.payload;
		},
		// Use this action to set active item state
		setActiveItem(state: FinancialRecordsState, action: PayloadAction<FinancialRecordEntity>) {
			state.activeItem = action.payload;
		}
	}
});


// Export reducer for store configuration.
export const financialRecordsReducer = financialRecordsSlice.reducer;

// Export action creators to be dispatched. For use with the `useDispatch` hook.
export const financialRecordsActions = financialRecordsSlice.actions;

// Export root state of slice
export const getFinancialRecordsState = ( rootState: StoreStateTypes): FinancialRecordsState => rootState[FINANCIAL_RECORDS_FEATURE_KEY];

// Select all financial records
export const selectAllFinancialRecords = createSelector(
	getFinancialRecordsState,
	(state: FinancialRecordsState) => state.data
);

// Select all financial records where is_redemption is income
export const selectAllIncomeFinancialRecords = createSelector(
	getFinancialRecordsState,
	(state: FinancialRecordsState) => state.data.filter((record) => !record.is_redemption)
);

// Select all financial records where is_redemption is expense
export const selectAllExpenseFinancialRecords = createSelector(
	getFinancialRecordsState,
	(state: FinancialRecordsState) => state.data.filter((record) => record.is_redemption)
);

// Select filter state
export const selectFilterState = createSelector(
	getFinancialRecordsState,
	(state: FinancialRecordsState) => state.filter
);

// Select earnings state
export const selectEarningsState = createSelector(
	getFinancialRecordsState,
	(state: FinancialRecordsState) => state.earnings
);

// Select active item state
export const selectActiveItemState = createSelector(
	getFinancialRecordsState,
	(state: FinancialRecordsState) => state.activeItem
);


