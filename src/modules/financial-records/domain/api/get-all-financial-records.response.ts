
export interface  FinancialRecordResponseEntity {
    createdAt?: string;
    product?: string;
    points?: number;
    image?: string;
    is_redemption?: boolean;
    id?: string;
    from_account_id?: number | null;
    to_account_id?: number | null;
    amount?: number | null;
    verification_code?: string | null;
    reason?: string | null;
    query?: string | null;
    variables?: Variables | null;
    operationName?: string | null;
    }

type GetAllFinancialRecordsRepsonse = FinancialRecordResponseEntity[];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Variables {}

export default GetAllFinancialRecordsRepsonse;


