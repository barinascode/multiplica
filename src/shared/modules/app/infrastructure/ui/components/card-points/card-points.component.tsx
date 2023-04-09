import React from 'react';
import {View, Text} from 'react-native';
import type CardPointProperties from './card-point.properties';
import styles from './card-points.style';

const CardPointsComponent : React.FC<CardPointProperties> = (properties) =>
	<View style={styles.container}>
		<Text style={styles.title}>
			{properties.title}
		</Text>
		<Text style={styles.value} testID={properties?.testID}>
			{properties.value} pts
		</Text>
	</View>;
	

export default CardPointsComponent;