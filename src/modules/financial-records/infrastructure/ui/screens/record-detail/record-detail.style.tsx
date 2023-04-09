import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	container: {
		flex: 1,
		
		paddingBottom: 40,
		backgroundColor:'#ffffff',
	},
	headerSection:{
		height: 100,
		paddingBottom:25,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		backgroundColor: '#CFD6FF',
		marginBottom: 20,
	},
	contentSection:{
		flex:1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
	},
	navigationSection:{
		paddingTop : 5,
		position: 'relative',
		width: '100%',
	},
	image:{
		width: '100%',
		height: 300,
		marginBottom: 15,
		borderRadius: 10,
	},
	productName:{
		fontSize: 24,
		fontFamily: 'Avenir-Black',
		color: '#000000',
	},
});

export default style;