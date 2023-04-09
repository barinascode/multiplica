
import { inject, injectable } from 'tsyringe';
import type ApiFinancialRecordsRepository from '@modules/financial-records/domain/repositories/api-financial-repository';
import type GetAllFinancialRecordsRepsonse from '@modules/financial-records/domain/api/get-all-financial-records.response';
import type HttpRepository from '@shared/core/domain/repositories/http.repository';

@injectable()
class ApiFinancialRecordsRepositoryImpl implements ApiFinancialRecordsRepository {
    
    
	constructor(@inject('HttpRepository') private _http: HttpRepository){}

	getAllFinancialRecords(): Promise<GetAllFinancialRecordsRepsonse | undefined> {

		return this._http.get<GetAllFinancialRecordsRepsonse>(
			'https://6222994f666291106a29f999.mockapi.io/api/v1/products'
		);
		
	}
}

export default ApiFinancialRecordsRepositoryImpl;
