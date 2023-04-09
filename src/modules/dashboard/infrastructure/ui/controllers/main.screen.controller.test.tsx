import 'reflect-metadata';
import '@shared/modules/app/infrastructure/di.container';
import React from 'react';
import { Provider } from 'react-redux';
import {render, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native';
import MainScreenController from './main.screen.controller';
import store from '@shared/modules/app/infrastructure/store/store.config';

const mockedDispatch = jest.fn();

jest.mock('@react-navigation/native', () => {
	const actualNav = jest.requireActual('@react-navigation/native');
	return {
		...actualNav,
		useNavigation: () => ({
			navigate: jest.fn(),
			dispatch: mockedDispatch,
		}),
	};
});

jest.mock('@modules/financial-records/infrastructure/repositories/api-financial-records.repository',
	() => jest.fn().mockImplementation(
		() => ({
			getAllFinancialRecords: jest.fn().mockImplementation(
				() => Promise.resolve([
					{   
						'id':'fd21f9e9b9b1b8a0b0e1b1b3',
						'createdAt': '2022-12-09T06:34:25.607Z',
						'product': 'Product 1',
						'points': 51,
						'image':'https://loremflickr.com/640/480/transport',
						'amount': 300,
						is_redemption: true,
					},
					{
						'id': '4ferf9e9b9b1b8a0b0e1b1b3',
						'createdAt': '2022-12-09T06:34:25.607Z',
						'product': 'Product 2',
						'points': 50,
						'image':'https://loremflickr.com/640/480/transport',
						'amount': 300,
						'is_redemption': false,
					},
					{
						'id': 'df233e9b9b1b8a0b0e1b1b3',
						'createdAt': '2022-12-09T06:34:25.607Z',
						'product': 'Product 3',
						'points': 50,
						'image':'https://loremflickr.com/640/480/transport',
						'amount': 300,
						'is_redemption': false,
					},
					{
						'id': '25551e9b9b1b8a0b0e1b1b3',
						'createdAt': '2022-12-09T06:34:25.607Z',
						'product': 'Product 4',
						'points': 50,
						'image':'https://loremflickr.com/640/480/transport',
						'amount': 300,
						'is_redemption': false,
					},
				])
			)
		})
	)
);

describe('<MainScreenController /> render successfully', () => {
    
	beforeEach(() => {
		mockedDispatch.mockClear();
	});


	it('should render successfully', async () => {
		render(
			<App>
				<MainScreenController />
			</App>
		);
	});

	// should have main screen texts
	it('should have main screen texts and filter buttons', async () => {
		const screen = render(
			<App>
				<MainScreenController />
			</App>
		);

		await waitFor(() => {
			expect(screen.getByText('TUS PUNTOS')).toBeTruthy();

			expect(screen.getByText('TUS MOVIMIENTOS')).toBeTruthy();

			expect(screen.getByText('Ganados')).toBeTruthy();

			expect(screen.getByText('Cangeados')).toBeTruthy();

			expect(screen.getByTestId('btn-earn-points')).toBeTruthy();

			expect(screen.getByTestId('btn-changed-points')).toBeTruthy();

		});

	});
});

// should display a record list
it('should display a record list with 4 records', async () => {
	
	const screen = render(
		<App>
			<MainScreenController />
		</App>
	);


	// checking for placeholders elements to be defined
	screen.getByTestId('records.item-placeholder-1');
	screen.getByTestId('records.item-placeholder-2');
	screen.getByTestId('records.item-placeholder-3');
	screen.getByTestId('records.item-placeholder-4');
    
	// waiting for the records list to be rendered
	await waitForElementToBeRemoved(
		() => screen.getByTestId('records.item-placeholder-1'), {
			timeout: 5000,
		});
    
	// check if placeholders are removed
	expect(screen.queryByTestId('records.item-placeholder-1')).toBeNull();
	
	// check if the records list is rendered
	expect(screen.getByTestId('records.virtualized-list')).toBeTruthy();

	// check if the records list has 4 items
	expect(screen.getAllByTestId('records.item').length).toBe(4);

	// check if the product name is in the document
	expect(screen.getByText('Product 1')).toBeTruthy();
	
	// get earning text by id
	const earningText = screen.getByTestId('records.item-earning-text');
	expect(earningText).toHaveTextContent('150,00');
	

});

export function App({children}:any) {
	return (
		<Provider store={store}>
			{children}
		</Provider>
		
	);
}