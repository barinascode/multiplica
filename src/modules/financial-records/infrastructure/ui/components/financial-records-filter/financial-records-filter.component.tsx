import React from 'react';

import ButtonGroupComponent from '@shared/modules/app/infrastructure/ui/components/button-group/button-group.component';
import ButtonComponent from '@shared/modules/app/infrastructure/ui/components/button/button.component';
import type FinancialRecordsFilterProperties from './financial-records-filter.properties';


const RecordsFilterComponent: React.FC<FinancialRecordsFilterProperties> = (properties) => 
	<>	
		{
			(properties.filter === 'all' ) ? 
				
				<ButtonGroupComponent>
					<ButtonComponent 
						testID='btn-earn-points'
						label='Ganados'
						onPress={properties.onPressDisplayIncomeRecords}
					/>
					<ButtonComponent 
						label='Cangeados' 
						onPress={properties.onPressDisplayExpenseRecords}
						testID='btn-changed-points'
					/>
				</ButtonGroupComponent>
				: 
				<ButtonGroupComponent>
					<ButtonComponent 
						label='Todos'
						onPress={properties.onPressDisplayAllRecords}
					/>
				</ButtonGroupComponent>

				
		}
	</>;

export default RecordsFilterComponent;