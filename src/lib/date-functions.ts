import { differenceInYears } from 'date-fns';
export const AgeCalculator = (dobString: string): number => {
    const dob = new Date(dobString);
    const today = new Date();
    return differenceInYears(today, dob);
}


import { intervalToDuration, formatDuration } from 'date-fns';

export const getPeriodBetweenDates = (startDateStr: string, endDateStr: string): string => {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const duration = intervalToDuration({ start: startDate, end: endDate });
    // Optional: To format as a readable string
    const formatted = formatDuration(duration, {
        format: ['years', 'months', 'days'],
    });

    return formatted; // e.g., "2 years 3 months 5 days"
}