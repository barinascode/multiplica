import type { FinancialRecordEntity } from './financial-record.entity';

interface FinancialRecordResume {
    earnings: number;
    data: FinancialRecordEntity[];
}

export default FinancialRecordResume;