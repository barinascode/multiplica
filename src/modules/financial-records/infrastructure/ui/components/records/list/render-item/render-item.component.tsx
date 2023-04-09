import React from 'react';
import RecordItemComponent from '../../item/record.item.component';
import type RenderItemProperties from './render-item.properties';

function renderItem({item, onPress}:RenderItemProperties){
	return <RecordItemComponent 
		item={item.item}
		key={item.item.id}
		onPress={onPress}
	/>;
}

export default renderItem;