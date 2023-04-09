import React from 'react';
import { Text } from 'react-native';
import styles from './header.style';
import type HeaderProperties from './header.properties';

const HeaderComponent: React.FC<HeaderProperties> = (properties) => (
	<>
		<Text testID='welcome-message' style={styles.title}>{properties.title}</Text>
		<Text style={styles.subtitle}>{properties.subtitle}</Text>
	</>
);

export default HeaderComponent;

