import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 20,
		backgroundColor:'#f8f8f8',
		paddingBottom: 40,
	},
	wellcomeUserSection: {
		height: 48,
		marginBottom: 15,
	},
	cardPointsSection: {
		height: 183,
		overflow:'hidden',
		marginBottom: 15,
	},
	recordsSection: {
		flex:1,
	},
	filterSection: {
		paddingTop : 5,
		position: 'relative',
		width: '100%',
	},
});

export default style;