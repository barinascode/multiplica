import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 8,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
		alignItems:'center'
	},
	sectionMedia: {
		width: 55,
		height: 55,
		marginRight: 10,
		borderRadius: 10,
		overflow: 'hidden',
		backgroundColor:'red'
	},
	sectionContent: {
		flex: 1,
		alignItems: 'center',
		height : 55,
		backgroundColor:'#eee',
		borderRadius: 10,
	},
	image: {
		width: 55,
		height: 55,
		borderRadius: 10,
	}
});

export default style;