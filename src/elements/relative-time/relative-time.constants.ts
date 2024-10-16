export interface UnitConfig {
  name: Intl.RelativeTimeFormatUnit;
  value: number;
}

export const RELATIVE_TIME_UNITS: UnitConfig[] = [
  {
    name: 'second',
    value: 1000
  },
  {
    name: 'minute',
    value: 60 * 1000
  },
  {
    name: 'hour',
    value: 60 * 60 * 1000
  },
  {
    name: 'day',
    value: 24 * 60 * 60 * 1000
  },
  {
    name: 'week',
    value: 7 * 24 * 60 * 60 * 1000
  },
  {
    name: 'month',
    value: 30 * 24 * 60 * 60 * 1000
  },
  {
    name: 'year',
    value: 365 * 24 * 60 * 60 * 1000
  }
];
