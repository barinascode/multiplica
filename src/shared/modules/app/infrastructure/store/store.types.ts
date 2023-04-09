import type { FinancialRecordsState } from '@modules/financial-records/infrastructure/store/financial-records.slice';

interface StoreStateTypes {
    financialRecords: FinancialRecordsState;
}

export default StoreStateTypes;
