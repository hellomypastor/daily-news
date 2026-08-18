import path from "path";
const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const toTitleCase = (str: string) =>
	str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});

export const getCalendarDateParts = (date: string) => {
	const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(date);
	if (!match) {
		throw new Error(`Invalid calendar date: ${date}`);
	}

	return {
		year: Number(match[1]),
		month: Number(match[2]),
		day: Number(match[3]),
	};
};

export const getMonthName = (date: string) => {
	const { month } = getCalendarDateParts(date);
	return MONTHS[month - 1];
};

export const getSlugFromPathname = (pathname: string) =>
	path.basename(pathname, path.extname(pathname));
