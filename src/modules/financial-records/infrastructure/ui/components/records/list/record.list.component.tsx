import React, {  PureComponent } from 'react';
import {VirtualizedList} from 'react-native';
import type RecordListProperties from './record.list.properties';
import PaperComponent from '@shared/modules/app/infrastructure/ui/components/paper/paper.component';
import type { FinancialRecordEntity } from '@modules/financial-records/domain/entities/financial-record.entity';
import renderItem from './render-item/render-item.component';

export default class RecordListComponent extends PureComponent<RecordListProperties> {

	constructor(props: RecordListProperties) {
		super(props);
	}

	render(){
			
		return <PaperComponent>

			{ 	(this.props.records.length > 0 ) ?
				<VirtualizedList
					testID='records.virtualized-list'
					data={this.props.records}
					
					initialNumToRender={5}
					
					maxToRenderPerBatch={5}
					
					renderItem={(item) => renderItem({item, onPress: this.props.onPress})}
					
					showsVerticalScrollIndicator={false}
					
					showsHorizontalScrollIndicator={false}
					
					contentContainerStyle={{marginBottom: 20}}
					
					keyExtractor={(item:FinancialRecordEntity ) => item.id}
					
					getItemCount={(data:FinancialRecordEntity[]) => data.length}
					
					// Pass here news props to the renderItem function
					getItem={(_data:FinancialRecordEntity[], index: number): FinancialRecordEntity => ({
						'id': _data[index].id,
						'product': _data[index].product,
						'points': _data[index].points,
						'is_redemption': _data[index].is_redemption,
						'created_at': _data[index].created_at,
						'image': _data[index].image,
					})}

					// Obtimized the render of the list
					getItemLayout={(data, index) => (
						{length: data.length, offset: 5 * index, index}
					)}
				/>
				:
				null
		
			}
		</PaperComponent>;} 
}