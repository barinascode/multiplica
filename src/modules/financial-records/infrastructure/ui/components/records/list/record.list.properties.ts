import type { FinancialRecordEntity } from '@modules/financial-records/domain/entities/financial-record.entity';

interface RecordListProperties {
    records: FinancialRecordEntity[];
    onPress: (_record: FinancialRecordEntity) => void;
}

export default RecordListProperties;