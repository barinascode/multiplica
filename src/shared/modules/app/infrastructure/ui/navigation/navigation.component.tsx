import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import type { RootStackType } from '@shared/modules/app/domain/entities/root.stack.type';
import MainScreenController from '@modules/dashboard/infrastructure/ui/controllers/main.screen.controller';
import RecordDetailScreenController from '@modules/financial-records/infrastructure/ui/controllers/record-detail-screen.controller';

const Stack = createStackNavigator<RootStackType>();

const NavigationComponent: React.FC = () => <NavigationContainer>
	<Stack.Navigator
		initialRouteName="MainScreen"
		screenOptions={{
			cardOverlayEnabled: false,
			headerShown: false,
			gestureEnabled: false,
			presentation: 'card',
			cardShadowEnabled: true,
			...TransitionPresets.SlideFromRightIOS,
			cardStyle: {
				backgroundColor: 'transparent',
				// opacity:0.95,
			},
		}}
	>
		<Stack.Screen name="MainScreen" component={MainScreenController} />
		<Stack.Screen name="RecordDetailScreen" component={RecordDetailScreenController} />
	</Stack.Navigator>
</NavigationContainer>;

export default NavigationComponent;