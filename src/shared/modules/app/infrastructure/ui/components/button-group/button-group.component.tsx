import React from 'react';
import { View } from 'react-native';
import type ButtonGroupProperties from './button-group.properties';
import styles from './button-group.style';

const ButtonGroupComponent: React.FC<ButtonGroupProperties> = (properties) =>
	<View style={styles.container}>
		{properties.children}
	</View>;

export default ButtonGroupComponent;