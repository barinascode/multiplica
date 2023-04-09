import type { FinancialRecordResponseEntity } from '../api/get-all-financial-records.response';
import type {  FinancialRecordEntity } from '../entities/financial-record.entity';

class FinancialRecordModel {

	// Represents the total amount of points earned
	public earnings = 0;

	// Result is the public property that will be returned
	public data: FinancialRecordEntity[] = [];

	// This is the default state of the record
	private default_record_state: FinancialRecordEntity = {
		id: '',
		product: '',
		points: 0,
		image: '',
		is_redemption: false,
		from_account_id: 0,
		to_account_id: 0,
		amount: 0,
		verification_code: '',
		reason: '',
		operation_name: '',
		query: '',
		variables: {},
		created_at: '',
	};

	constructor(payload: FinancialRecordResponseEntity[] | undefined) {

		// Check if the payload is not undefined
		if(payload){
			
			// set the records object with the default state
			this.data = payload.map?.((record) => {
				
				const new_record = { ...this.default_record_state };

				if(record.id)
					new_record.id = record.id;
			
				if(record.product)
					new_record.product = record.product;
			
				if(record?.points)
					new_record.points = record.points;

				if(record.image)
					new_record.image = record.image;

				if(record.is_redemption)
					new_record.is_redemption = record.is_redemption;
				
				if(record.from_account_id)
					new_record.from_account_id = record.from_account_id;
				
				if(record.to_account_id)
					new_record.to_account_id = record.to_account_id;
				
				if(record.amount)
					new_record.amount = record.amount;

				if(record.verification_code)
					new_record.verification_code = record.verification_code;
			
				if(record.reason)
					new_record.reason = record.reason;

				if(record.operationName)
					new_record.operation_name = record.operationName;
				
				if(record.query)
					new_record.query = record.query;
				
				if(record.variables)
					new_record.variables = record.variables;

				if(record.createdAt)
					new_record.created_at = record.createdAt;

				return new_record;
				
			});

			this.calculateEarnings();
		}
		else {
			this.data = [];
			this.earnings = 0;
			
		}
	}

	// This method is used to calculate the total amount of points earned
	public calculateEarnings(): number {
		
		// sum all points of the records
		const sumOfAllPoints = this.data.reduce((acc, record) => acc + record.points, 0);
		
		// sum all points of the records where is_redemption is true
		const sumOfPointsIsRedention = this.data.reduce((acc, record) => {
			if (record.is_redemption) {
				return acc + record.points;
			}
			return acc;
		}, 0);

		// calculate the total amount of points earned
		this.earnings =  sumOfAllPoints - sumOfPointsIsRedention;
		
		return this.earnings;

	}
}

export default FinancialRecordModel;