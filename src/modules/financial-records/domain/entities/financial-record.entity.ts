
/* 
  This entity is used to map the response of the API to ensure that the data is correct and that it is not missing any field
*/
export interface FinancialRecordEntity {
    created_at: string;
    product: string;
    points: number;
    image: string;
    is_redemption: boolean;
    id: string;
    from_account_id?: number | null;
    to_account_id?: number | null;
    amount?: number | null;
    verification_code?: string | null;
    reason?: string | null;
    query?: string | null;
    variables?: Variables | null;
    operation_name?: string | null;
  }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Variables {}
  