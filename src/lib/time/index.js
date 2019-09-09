import { pipe } from "../helpers";
import { unsign } from "../helpers";
import moment from 'moment';

/**
 * Returns the positive epoch between two timestamps
 */
export const getDelta = ({ fromDate, toDate }) => pipe(({ fromDate, toDate }) => moment.duration(fromDate.diff(toDate)), unsign)({ fromDate, toDate });

/**
 * Helpers to retrieve the years, months, days, hours, minutes etc...
 */
export const yearsSince   = (time) => ({ ...time, years: moment.duration(time.delta).years() });
export const monthsSince  = (time) => ({ ...time, months: moment.duration(time.delta).months() });
export const daysSince    = (time) => ({ ...time, days: moment.duration(time.delta).days() });
export const hoursSince   = (time) => ({ ...time, hours: moment.duration(time.delta).hours() });
export const minutesSince = (time) => ({ ...time, minutes: moment.duration(time.delta).minutes() });
export const secondsSince = (time) => ({ ...time, seconds: moment.duration(time.delta).seconds() });

/**
 * Composition func to format the return data.
 */
export const yearsMonthsHoursSince = (fromDate, toDate) => pipe(({ fromDate, toDate }) => ({ delta: getDelta({ fromDate, toDate }) }), yearsSince, monthsSince, hoursSince)({ fromDate, toDate });
