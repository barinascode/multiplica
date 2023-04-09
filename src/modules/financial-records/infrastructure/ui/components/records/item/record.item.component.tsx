import React, { Component } from 'react' ;
import { Text,  View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './record.item.style';
import type RecordItemProperties from './record.item.properties';
import format_date from '@shared/core/infrastructure/utilities/format.date';

export default class RecordItemComponent extends Component<RecordItemProperties> {

	constructor(props: RecordItemProperties) {
		super(props);
	}

	shouldComponentUpdate() {
		return false;
	}

	render(){
		return (
			<TouchableOpacity 
				style={styles.container}
				onPress={()=>this.props.onPress?.(this.props.item)}
				testID='records.item'
			>

				<View style={styles.sectionMediaImage}>
					<Image source={{ uri: this.props?.item?.image}} style={styles.sectionMediaImage}
					/>
				</View>

				<View style={styles.sectionProductInfo}>
					<Text style={styles.recordProductName}>{this.props.item.product}</Text>
					<Text style={styles.recordDate}>{format_date(this.props.item.created_at)} </Text>
				</View>

				<View style={styles.sectionCallToAction}>
					{
						this.props.item.is_redemption ? 
							<Text style={styles.recordNegativePoints}>{'-'} </Text>
							:
							<Text style={styles.recordPositivePoints}>{'+'} </Text>
					}
					<Text style={styles.recordPoints}>{this.props.item.points}</Text>
					<Text style={styles.showMoreSimbol}>{'>'}</Text>
				</View>	
				
			</TouchableOpacity>
		);
	}

}