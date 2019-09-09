import * as Time from './index';
import moment from 'moment';

const fromDate = moment('2018-07-20T00:00:00');
const toDate   = moment('2019-08-21T08:30:00');

const delta = Time.getDelta({ fromDate, toDate });

it('finds hours relative to a day since a date', () => {
    const { hours } = Time.hoursSince({ delta });
    expect(hours).toEqual(8);
});

it('finds minutes relative to a day since a date', () => {
    const { minutes } = Time.minutesSince({ delta });
    expect(minutes).toEqual(30);
});

it('finds months relative to a day since a date', () => {
    const { months } = Time.monthsSince({ delta });
    expect(months).toEqual(1);
});

it('finds years relative to a day since a date', () => {
    const { years } = Time.yearsSince({ delta });
    expect(years).toEqual(1);
});

it('collates years, months, hours since a date', () => {
    const { years, months, hours } = Time.yearsMonthsDaysHoursSince(fromDate, toDate);
    expect(years).toEqual(1);
    expect(months).toEqual(1);
    expect(hours).toEqual(8);
});
