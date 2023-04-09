import {container} from 'tsyringe';
import FetchFinancialRecordsUseCase from '@modules/financial-records/application/fetch-financial-records.useCase';
import HttpRepositoryImpl from '@shared/core/infrastructure/repositories/http.repository.impl';
import ApiFinancialRecordsRepositoryImpl from '@modules/financial-records/infrastructure/repositories/api-financial-records.repository';

/*
*   USE CASES
*/
container.registerSingleton('FetchFinancialRecordsUseCase',FetchFinancialRecordsUseCase);

/*
*   REPOSITORIES
*/
container.registerSingleton('HttpRepository',HttpRepositoryImpl);
container.registerSingleton('ApiFinancialRecordsRepository',ApiFinancialRecordsRepositoryImpl);

export default container;