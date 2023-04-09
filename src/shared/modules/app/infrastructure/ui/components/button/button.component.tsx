import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import type ButtonProperties from './button.properties';
import styles from './buttion.style';

const ButtonComponent: React.FC<ButtonProperties> = (properties) => (
	<TouchableOpacity
		style={styles.button}
		onPress={()=>properties.onPress?.()}
		testID={properties.testID}
	>
		<Text style={styles.text}>{properties.label}</Text>
	</TouchableOpacity >
);

export default ButtonComponent;