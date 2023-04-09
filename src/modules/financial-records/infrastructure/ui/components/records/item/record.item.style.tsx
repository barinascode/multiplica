import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 8,
	},
	sectionMedia: {
		width: 55,
		height: 55,
		borderRadius: 10,
		overflow: 'hidden',
	},
	sectionMediaImage: {
		width: 55,
		height: 55,
		borderRadius: 10,
	},
	sectionProductInfo: {
		flex: 1,
		marginLeft: 10,
	},
	sectionCallToAction: {
		flexDirection: 'row',
		alignItems: 'center',
		
	},
	recordProductName: {
		fontSize: 14,
		fontFamily: 'Avenir-Black',
		color: '#000000',
	},
	recordDate: {
		fontSize: 12,
		fontFamily: 'Avenir-Book',
		color: '#000000',
		marginTop: 10,
	},
	recordPositivePoints: {
		fontSize: 16,
		fontFamily: 'Avenir-Black',
		color: '#00BFA6',
		letterSpacing: -1,
	},
	recordNegativePoints: {
		fontSize: 20,
		fontFamily: 'Avenir-Black',
		color: '#FF0000',
		letterSpacing: -1,
	},
	recordPoints: {
		textAlign: 'left',
		fontSize: 16,
		fontFamily: 'Avenir-Black',
		color: '#000000',
		marginRight: 10,
	},
	showMoreSimbol: {
		fontSize: 20,
		fontFamily: 'Avenir-Black',
		color: '#000000',
	},
});

export default style;