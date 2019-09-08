import { pipe } from "../helpers";
import { unsign } from "../helpers/helpers.test";
import moment from 'moment';

/**
 * Returns the positive epoch between two timestamps
 */
export const getDelta = ({ fromDate, toDate }) => pipe(({ fromDate, toDate }) => moment.duration(fromDate.diff(toDate)), unsign)({ fromDate, toDate });

export const yearsSince = (time) => ({ ...time, years: moment.duration(time.delta).years() });

export const daysSince = (time) => ({ ...time, days: moment.duration(time.delta).days() });

export const hoursSince = (time) => ({ ...time, hours: moment.duration(time.delta).hours() });

export const minutesSince = (time) => ({ ...time, minutes: moment.duration(time.delta).minutes() });

export const monthsSince = (time) => ({ ...time, months: moment.duration(time.delta).months() });

export const yearsMonthsHoursSince = (fromDate, toDate) => pipe(({ fromDate, toDate }) => ({ delta: getDelta({ fromDate, toDate }) }), yearsSince, monthsSince, hoursSince)({ fromDate, toDate });
