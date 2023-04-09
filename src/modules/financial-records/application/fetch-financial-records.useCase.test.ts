import 'reflect-metadata';
import container from '@shared/modules/app/infrastructure/di.container';
import type FetchFinancialRecordsUseCase from './fetch-financial-records.useCase';
import type ApiFinancialRecordsRepositoryImpl from '../infrastructure/repositories/api-financial-records.repository';
import HttpError from '@shared/core/infrastructure/utilities/http-error';

describe('FetchFinancialRecordsUseCase', () => {
	it('should return a promise with the financial records and the total amount of points earned', async () => {
		
		const fetchFinancialRecordsUseCase = container.resolve<FetchFinancialRecordsUseCase>('FetchFinancialRecordsUseCase');

		const apiFinancialRecordsRepositoryImpl = container.resolve<ApiFinancialRecordsRepositoryImpl>('ApiFinancialRecordsRepository');

		// Spy the getAllFinancialRecords method from the ApiFinancialRecordsRepositoryImpl
		const apiRepositorySpy = jest.spyOn(apiFinancialRecordsRepositoryImpl,'getAllFinancialRecords');

		// Mock the getAllFinancialRecords method to return a promise resolved with an empty array
		apiRepositorySpy.mockImplementation(() => new Promise((resolve) => {
			setTimeout(() => {
				resolve([]);
			}, 2000);
		}));
		
		const result = fetchFinancialRecordsUseCase.execute();

		// Check if the getAllFinancialRecords method was called
		expect(apiRepositorySpy).toHaveBeenCalled();
		
		// Check if the result is a promise
		expect(result).toBeInstanceOf(Promise);

		// resolve the promise
		const resolvedResult = await result;

		// Check if the result is a promise resolved with an object with the properties data and earnings
		expect(resolvedResult).toHaveProperty('data');
		expect(resolvedResult).toHaveProperty('earnings');
		expect(resolvedResult.data).toEqual([]);
		expect(resolvedResult.earnings).toEqual(0);
		
	});

	// should throw an error if the API returns an error
	it('should throw an error if the API returns an error', async () => {
		
		const fetchFinancialRecordsUseCase = container.resolve<FetchFinancialRecordsUseCase>('FetchFinancialRecordsUseCase');

		const apiFinancialRecordsRepositoryImpl = container.resolve<ApiFinancialRecordsRepositoryImpl>('ApiFinancialRecordsRepository');

		// Spy the getAllFinancialRecords method from the ApiFinancialRecordsRepositoryImpl
		const apiRepositorySpy = jest.spyOn(apiFinancialRecordsRepositoryImpl,'getAllFinancialRecords');

		// Mock the getAllFinancialRecords method to return a promise rejected with an error
		apiRepositorySpy.mockImplementation(() => new Promise((resolve,reject) => {
			setTimeout(() => {
				reject(new HttpError('API Error'));
			}, 2000);
		}));
		
		try {
			
			await fetchFinancialRecordsUseCase.execute();
		
		} catch (error: any) {
			
			// Check if the getAllFinancialRecords method was called
			expect(apiRepositorySpy).toHaveBeenCalled();
			
			expect(error).toBeInstanceOf(HttpError);

			expect(error.message).toBe('API Error');
			
		}
	});

	// should return a promise resolved with an object with the mapped properties data and earnings
	it('should return a promise resolved with an object with the mapped properties data and earnings', async () => {
		
		const fetchFinancialRecordsUseCase = container.resolve<FetchFinancialRecordsUseCase>('FetchFinancialRecordsUseCase');

		const apiFinancialRecordsRepositoryImpl = container.resolve<ApiFinancialRecordsRepositoryImpl>('ApiFinancialRecordsRepository');

		// Spy the getAllFinancialRecords method from the ApiFinancialRecordsRepositoryImpl
		const apiRepositorySpy = jest.spyOn(apiFinancialRecordsRepositoryImpl,'getAllFinancialRecords');

		// 

		// Mock the getAllFinancialRecords method to return a promise resolved with an array of financial records
		apiRepositorySpy.mockImplementation(() => new Promise((resolve) => {
			setTimeout(() => {
				resolve([{}]);
			}, 2000);
		}));

		const result = fetchFinancialRecordsUseCase.execute();

		// Check if the getAllFinancialRecords method was called
		expect(apiRepositorySpy).toHaveBeenCalled();

		// Check if the result is a promise
		expect(result).toBeInstanceOf(Promise);

		// resolve the promise
		const resolvedResult = await result;

		// Check if the result is a promise resolved with an object with the properties data and earnings
		expect(resolvedResult).toHaveProperty('data');
		expect(resolvedResult).toHaveProperty('earnings');

		// Check if the data property is an array with the mapped properties
		expect(resolvedResult.data).toEqual([
			{
				'id': '',
				'created_at': '',
				'product': '',
				'points': 0,
				'image':'',
				'amount': 0,
				'operation_name': '',
				'is_redemption': false,
				'query': '',
				'reason': '',
				'variables': {},
				'verification_code': '',
				'from_account_id': 0,
				'to_account_id': 0,
			},
		]);

		// Check if the earnings property is a number
		expect(resolvedResult.earnings).toEqual(0);
	});

	// should return the total amount of points earned
	it('should return the total amount of points earned', async () => {
		
		const fetchFinancialRecordsUseCase = container.resolve<FetchFinancialRecordsUseCase>('FetchFinancialRecordsUseCase');

		const apiFinancialRecordsRepositoryImpl = container.resolve<ApiFinancialRecordsRepositoryImpl>('ApiFinancialRecordsRepository');

		// Spy the getAllFinancialRecords method from the ApiFinancialRecordsRepositoryImpl
		const apiRepositorySpy = jest.spyOn(apiFinancialRecordsRepositoryImpl,'getAllFinancialRecords');

		// Mock the getAllFinancialRecords method to return a promise resolved with an array of financial records
		apiRepositorySpy.mockImplementation(() => new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{
						'id': '5fd21f9e9b9b1b8a0b0e1b1b3',
						'createdAt': '2022-12-09T06:34:25.607Z',
						'product': 'Product 3',
						'points': 50,
						'image':'https://loremflickr.com/640/480/transport',
						'amount': 300,
						is_redemption: true,
					},
					{
						'id': '5fd21f9e9b9b1b8a0b0e1b1b3',
						'createdAt': '2022-12-09T06:34:25.607Z',
						'product': 'Product 3',
						'points': 50,
						'image':'https://loremflickr.com/640/480/transport',
						'amount': 300,
						'is_redemption': false,
					},
					{
						'id': '5fd13f9e9b9b1b8a0b0e1b1b3',
						'createdAt': '2022-12-09T06:34:25.607Z',
						'product': 'Product 3',
						'points': 50,
						'image':'https://loremflickr.com/640/480/transport',
						'amount': 300,
						'is_redemption': false,
					},
					{
						'id': '5fd1f9e9b4b1b8a0b0e1b1b3',
						'createdAt': '2022-12-09T06:34:25.607Z',
						'product': 'Product 3',
						'points': 50,
						'image':'https://loremflickr.com/640/480/transport',
						'amount': 300,
						'is_redemption': false,
					},
				]);
			}, 2000);
		}));

		const result = fetchFinancialRecordsUseCase.execute();

		// Check if the getAllFinancialRecords method was called
		expect(apiRepositorySpy).toHaveBeenCalled();

		// Check if the result is a promise
		expect(result).toBeInstanceOf(Promise);

		// resolve the promise
		const resolvedResult = await result;

		// check if the earnings property is equal to the total amount of points earned
		expect(resolvedResult.earnings).toBe(150);

	});
	
});