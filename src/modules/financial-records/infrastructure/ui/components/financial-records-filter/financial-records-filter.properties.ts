import type { FinancialRecorsdFilerType } from '@modules/financial-records/infrastructure/store/financial-records.slice';

interface FinancialRecordsFilterProperties {
    onPressDisplayAllRecords : () => void;
    onPressDisplayExpenseRecords : () => void;
    onPressDisplayIncomeRecords : () => void;
    filter : FinancialRecorsdFilerType
}

export default FinancialRecordsFilterProperties;
