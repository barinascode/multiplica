import { StyleSheet } from 'react-native';
import ColorPalette from '@shared/modules/app/infrastructure/constants/color.palette';

const styles = StyleSheet.create({
	container: {
		height: 143,
		width: 286,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: ColorPalette.blue,
		borderRadius: 15,
	},
	title: {
		color: ColorPalette.white,
		fontSize: 16,
		fontFamily: 'Avenir-Black',
		position: 'absolute',
		top: 20,
		left:30,
	},
	value: {
		color: ColorPalette.white,
		fontSize: 28,
		textAlign: 'center',
		fontFamily: 'Avenir-Black',
	},
	
});

export default styles;