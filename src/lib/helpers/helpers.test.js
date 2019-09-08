import { unsign } from "./index";

it('converts numbers less than 0 to a positive number', () => {
    expect(unsign(-5)).toEqual(5);
});

it('leaves positive numbers as they were before conversion', () => {
    expect(unsign(5)).toEqual(5);
});
