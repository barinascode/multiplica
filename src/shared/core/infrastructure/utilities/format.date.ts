


function format_date(date:string | undefined | null ):string {

	// validate if date is undefined or null
	if(!date) return '';

	// validate if string is valid date
	if(!Date.parse(date)) return '';

	// format date 2022-12-09T12:50:53.209Z to day de month, year
	const objDate = new Date(date);
	
	// const month = objDate.getMonth();
	const day = objDate.getDate();
	
	// const month = objDate.getMonth() + 1;
	const year = objDate.getFullYear();

	// number month to string month
	const monthString = new Intl.DateTimeFormat('es-MX', { month: 'long' }).format(objDate);

	return `${day} de ${monthString}, ${year}`;

}

export default format_date;