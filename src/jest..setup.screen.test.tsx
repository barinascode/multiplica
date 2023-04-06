import React from 'react';
import { render } from '@testing-library/react-native';
import { View, Text } from 'react-native';

const TestRenderScreen: React.FC = () => <View>
	<Text testID='message'>Hello World</Text>
</View>;

// should render the component
describe('<TestRenderScreen /> ', () => {
	it('should render the component', () => {
		const { getByTestId } = render(<TestRenderScreen />);
		expect(getByTestId('message')).toHaveTextContent('Hello World');
	});
});