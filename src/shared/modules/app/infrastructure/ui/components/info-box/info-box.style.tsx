import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		height: 200,
		marginBottom: 20,
		flex:1,
	},
	text: {
		fontFamily: 'Avenir-Black',
		color: '#9B9898',
		fontSize: 16,
		marginBottom:20,
	},
	centeredChildrenContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	defaultChildrenContainer: {
		flex:1,
	}


});

export default styles;