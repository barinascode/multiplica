import type { FinancialRecordEntity } from '@modules/financial-records/domain/entities/financial-record.entity';

interface RecordItemProperties {
    item : FinancialRecordEntity;
    onPress: (_item: FinancialRecordEntity) => void;
}

export default RecordItemProperties;