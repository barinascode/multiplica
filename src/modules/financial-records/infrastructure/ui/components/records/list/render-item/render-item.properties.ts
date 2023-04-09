import type { FinancialRecordEntity } from '@modules/financial-records/domain/entities/financial-record.entity';

type RenderItemProperties = {
	item: {
		item: FinancialRecordEntity;
	};
	onPress: (_item: FinancialRecordEntity) => void;
};

export default RenderItemProperties;