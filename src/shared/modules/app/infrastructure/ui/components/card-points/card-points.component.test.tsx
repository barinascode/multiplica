import React from 'react';
import { render } from '@testing-library/react-native';
import CardPointsComponent from './card-points.component';

/*
 * Yes, I know that this test is not very useful, but it is just an example.
 */

describe('<CardPointsComponent />', () => {

	it('should render successfully', () => {
		render(
			<CardPointsComponent 
				title={'foo'}
				value={'var'}
			/>
		);
	});

	// should render title and value
	it('should render title and value', () => {
		const { getByText } = render(
			<CardPointsComponent 
				title={'foo'}
				value={'var'}
			/>
		);

		expect(getByText('foo')).toBeTruthy();
		expect(getByText('var pts')).toBeTruthy();
	});



});