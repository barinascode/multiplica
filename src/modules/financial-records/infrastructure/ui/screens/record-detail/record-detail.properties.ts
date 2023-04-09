import type { FinancialRecordEntity } from '@modules/financial-records/domain/entities/financial-record.entity';

interface RecordDetailProperties {
    record: FinancialRecordEntity | null | undefined;
    onAccept: () => void;
}

export default RecordDetailProperties;