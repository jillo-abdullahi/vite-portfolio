export const getDuration = (
    startDateString: string,
    endDateString?: string
): string => {
    // Helper to ensure dates like "Oct 2025" are parsed correctly by adding a day
    const parseDate = (dateStr: string) => {
        // If it looks like "Month Year" (e.g. "Oct 2025"), add the day 1
        if (/^[A-Za-z]+\s\d{4}$/.test(dateStr)) {
            return new Date(`${dateStr.split(" ")[0]} 1, ${dateStr.split(" ")[1]}`);
        }
        return new Date(dateStr);
    };

    const startDate = parseDate(startDateString);
    const endDate = endDateString ? parseDate(endDateString) : new Date();

    // Check for invalid dates to avoid NaNs
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return "";
    }

    let months =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());

    // Add 1 month to include the starting month (e.g., Jan to Mar is 3 months, not 2)
    months++;

    if (months < 1) return "";

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const parts = [];
    if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
    if (remainingMonths > 0)
        parts.push(`${remainingMonths} ${remainingMonths === 1 ? "mo" : "mos"}`);

    return parts.join(" ");
};

export const formatDateRange = (
    startDate: string,
    endDate?: string,
    isCurrent?: boolean
): string => {
    if (isCurrent) {
        return `${startDate} - Present`;
    }
    return `${startDate} - ${endDate}`;
};
