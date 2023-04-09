import type GetAllFinancialRecordsRepsonse from '../api/get-all-financial-records.response';

interface ApiFinancialRecordsRepository {
    getAllFinancialRecords(): Promise<GetAllFinancialRecordsRepsonse | undefined>;
}

export default ApiFinancialRecordsRepository;