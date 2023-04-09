import React from 'react';
import { View,  Image } from 'react-native';
import type RecordDetailProperties from './record-detail.properties';
import ButtonGroupComponent from '@shared/modules/app/infrastructure/ui/components/button-group/button-group.component';
import ButtonComponent from '@shared/modules/app/infrastructure/ui/components/button/button.component';
import TextComponent from '@shared/modules/app/infrastructure/ui/components/text/text.component';
import format_number from '@shared/core/infrastructure/utilities/format.number';
import format_date from '@shared/core/infrastructure/utilities/format.date';
import styles from './record-detail.style';
import { StatusBar } from 'expo-status-bar';

const RecordDetailScreen: React.FC<RecordDetailProperties> = (properties):JSX.Element =>

	<View style={styles.container}>
		<StatusBar style='dark' backgroundColor='#CFD6FF'/>
		<View style={styles.headerSection}>
			<TextComponent variant='h1' color='black'>
				{properties.record?.product || ''}
			</TextComponent>
		</View>

		<View style={styles.contentSection}>

			<View style={{marginBottom: 5}}>
				<Image
					source={{
						uri: properties.record?.image || '',
					}} 
					style={styles.image}
					resizeMode="cover"
				/>
			</View>
				
			<TextComponent variant='h3' color='grey' style={{marginBottom : 20}}>
				Detalles del producto:
			</TextComponent>
			<TextComponent variant='h2' color='black' style={{marginBottom : 20}}>
				{`Comprado el ${format_date(properties.record?.created_at) }`}
			</TextComponent>
			
			<TextComponent variant='h3' color='grey' style={{marginBottom : 40}}>
				Con esta compra acumulaste
			</TextComponent>

			<TextComponent variant='h1' color='black'>
				{`${format_number(properties.record?.points)} puntos`}
			</TextComponent>

		</View>

		<View style={styles.navigationSection}>
			<ButtonGroupComponent>
				<ButtonComponent label='Aceptar' onPress={properties.onAccept}/>
			</ButtonGroupComponent>
		</View>

	</View>;

export default RecordDetailScreen;