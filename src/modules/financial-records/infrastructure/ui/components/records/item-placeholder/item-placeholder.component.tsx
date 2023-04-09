import React, { Component } from 'react';
import { View, Image} from 'react-native';
import styles from './item-placeholder.style';

export class ItemPlaceholder extends Component<{testID:string}> {
	
	shouldComponentUpdate(){
		return false;
	}

	render(){
		return (
			<View 
				style={styles.container}
				testID={this.props.testID}
			>
				<View style={styles.sectionMedia}>
					<Image 
						style={styles.image} 
						source={require('@assets/images/image-placeholder.png')} />
				</View>
				<View style={styles.sectionContent} />
        
			</View>
		);
	}

}

export default ItemPlaceholder;
