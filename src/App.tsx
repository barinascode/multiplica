import 'reflect-metadata';
import React from 'react';
import { registerRootComponent } from 'expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import NavigationComponent from '@shared/modules/app/infrastructure/ui/navigation/navigation.component';
import store from '@shared/modules/app/infrastructure/store/store.config';
import '@shared/modules/app/infrastructure/di.container';

export default function App() {
	
	const [fontsLoaded] = useFonts({
		'Avenir-Black': require('@assets/fonts/avenir/AvenirLTStd-Black.otf'),
		'Avenir-Book': require('@assets/fonts/avenir/AvenirLTStd-Book.otf'),
		'Avenir-Roman': require('@assets/fonts/avenir/AvenirLTStd-Roman.otf'),
	});
	
	if (!fontsLoaded) return null;

	return (
		<Provider store={store}>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="auto" />
				<NavigationComponent/>
			</SafeAreaView>
		</Provider>
		
	);
}

registerRootComponent(App);