import { StyleSheet } from 'react-native';
import ColorPalette from '@shared/modules/app/infrastructure/constants/color.palette';

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: ColorPalette.blue,
		borderRadius: 15,
		padding: 10,
		margin: 10,
		height: 60,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	text: {
		color: '#FFFFFF',
		textAlign: 'center',
		fontSize: 20,
		fontFamily: 'Avenir-Black',
	},
});

export default styles;