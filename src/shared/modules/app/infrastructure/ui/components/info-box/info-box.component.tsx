import React from 'react';
import type InfoBoxProperties from './info-box.properties';
import { View, Text } from 'react-native';
import styles from './info-box.style';


const InfoBoxComponent: React.FC<InfoBoxProperties> = (properties) =>

	<View style={{...styles.container, height:properties?.height, flex:properties.flex}}>
		{properties.title && <Text style={styles.text}>{properties.title}</Text>}
		<View style={[
			(properties.fullCenter) ? styles.centeredChildrenContainer : false,
			(typeof properties.customChildrenContainerStyle === 'undefined') ? styles.defaultChildrenContainer : properties.customChildrenContainerStyle
		]}>
			{properties.children}
		</View>
	</View>;
	

export default InfoBoxComponent;