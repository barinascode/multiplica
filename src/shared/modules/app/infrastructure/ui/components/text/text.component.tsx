import React from 'react';
import { Text } from 'react-native';
import type TextProperties from './text.properties';

// Modify this object to add new styles
const textStyles = {
	'h1': () => ({
		fontSize: 24,
		fontFamily: 'Avenir-Black',
		color: '#000000',
	}),
	'h2': () => ({
		fontSize: 20,
		fontFamily: 'Avenir-Black',
		color: '#000000',
	}),
	'h3': () => ({
		fontSize: 16,
		fontFamily: 'Avenir-Black',
		color: '#000000',
	}),
	'h4': () => ({
		fontSize: 10,
		fontFamily: 'Avenir-Black',
		color: '#000000',
	}),
	'h5': () => ({
		fontSize: 16, 
		fontFamily:'Avenir-Black', 
		color: '#9B9898'
	}),
};

const colorStyles = {
	'black': () => ({
		color: '#000000',
	}),
	'grey': () => ({
		color: '#9B9898',
	}),
	'white': () => ({
		color: '#ffffff',
	}),
};

const TextComponent:React.FC<TextProperties> = (properties) =>
	<Text 
		style={{
			...properties.style,
			...textStyles[properties.variant](),
			...colorStyles[properties.color](),
			
		}}>
		{properties.children}
	</Text>;

export default TextComponent;