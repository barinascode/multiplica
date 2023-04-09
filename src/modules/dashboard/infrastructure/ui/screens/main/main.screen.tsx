import React from 'react';
import { View } from 'react-native';
import HeaderController from '../../controllers/header.controller';
import CardPointsController from '../../controllers/card-points.controller';
import RecordsController from '@modules/financial-records/infrastructure/ui/controllers/records.controller';
import FinancialRecordsFilterController from '@modules/financial-records/infrastructure/ui/controllers/financial-records-filter.controller';
import AnimateSlideFromRightToLeft from '@shared/modules/app/infrastructure/ui/animations/animate-slide-from-right-to-left.animation';
import AnimateSlideFromBottomToTop from '@shared/modules/app/infrastructure/ui/animations/animate-slide-from-bottom-to-top.animation';
import InfoBoxComponent from '@shared/modules/app/infrastructure/ui/components/info-box/info-box.component';
import AnimateSlideFromTopToBottom from '@shared/modules/app/infrastructure/ui/animations/animate-slide-frpm-top-to-bottom.animation';
import styles from './main.style';

/*
	<MainScreen />

   	The main screen is the first screen that the user see when the app is open
	This screen is exposed by the controller MainScreenController to the navigation component

	@role Screen

	@see MainScreenController

	@see NavigationComponent

	@params none
	
	@returns JSX.Element

 */

const MainScreen: React.FC = ():JSX.Element =>

	<View style={styles.container}>
		<View style={styles.wellcomeUserSection}>
			<AnimateSlideFromTopToBottom duration={1000} delay={1000}>
				<InfoBoxComponent height={100}>
					<HeaderController />
				</InfoBoxComponent>
			</AnimateSlideFromTopToBottom>
		</View>

		<View style={styles.cardPointsSection}>
			<AnimateSlideFromBottomToTop duration={1500} delay={0}>
				<InfoBoxComponent  title='TUS PUNTOS' fullCenter height={183}>
					<CardPointsController />
				</InfoBoxComponent>
			</AnimateSlideFromBottomToTop>
		</View>

		<View style={styles.recordsSection}>
			<AnimateSlideFromRightToLeft>
				<InfoBoxComponent title='TUS MOVIMIENTOS' flex={1}>
					<RecordsController />
				</InfoBoxComponent>
			</AnimateSlideFromRightToLeft>
		</View>

		<View style={styles.filterSection}>
			<AnimateSlideFromBottomToTop duration={2000} delay={3000}>
				<FinancialRecordsFilterController />
			</AnimateSlideFromBottomToTop>
		</View>
	</View>;

export default MainScreen;