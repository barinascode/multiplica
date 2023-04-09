function format_number(value:number | null | undefined):string{
	
	if(typeof value !== 'number' || typeof value === 'undefined') return '';

	const result = new Intl.NumberFormat('es-PY', {
		minimumFractionDigits: 2,

	}).format(value);

	return result;
}

export default format_number;