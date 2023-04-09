import React from 'react';
import { View } from 'react-native';
import type PaperProperties from './paper.properties';
import styles from './paper.style';

const PaperComponent:React.FC<PaperProperties> = (properties) =>
	<View style={[
		styles.container, 
		(properties.style) ? properties.style : undefined
	]}>
		{properties.children}
	</View>;

export default PaperComponent;