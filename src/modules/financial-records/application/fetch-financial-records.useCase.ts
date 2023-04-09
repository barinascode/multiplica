import {  inject, injectable } from 'tsyringe';
import type ApiFinancialRecordsRepository from '../domain/repositories/api-financial-repository';
import type FinancialRecordResume from '../domain/entities/financial-record-resume.entity';
import FinancialRecordModel from '../domain/models/financial-record.model';

/*
    This use case is used to fetch all financial records from the API and
    calculate the total amount of points earned

    @returns {Promise<FinancialRecordResume>} - Returns a promise with the financial 
    records and the total amount of points earned 

    @throws {Error} - Throws an error if the API returns an error

    The error should by handled by the controller in the infrastructure layer and by dispatched to the error handler
*/

@injectable()
class FetchFinancialRecordsUseCase {

	constructor(
        @inject('ApiFinancialRecordsRepository') private readonly _apiFinancialRecordsRepository: ApiFinancialRecordsRepository
	) {}

	async execute(): Promise<FinancialRecordResume> {
        
		// Fetch all financial records from the API
		const api_result = await this._apiFinancialRecordsRepository.getAllFinancialRecords();
        
		// Mapping the result to the FinancialRecordModel and calculate the total amount of points earned
		const financialRecords = new FinancialRecordModel(api_result);

		// return promise resolved with setTimeout to simulate a delay
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({ data : financialRecords.data, earnings: financialRecords.earnings });
			}, 2000);
		});

	}
}

export default FetchFinancialRecordsUseCase;