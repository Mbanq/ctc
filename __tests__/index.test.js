'use strict'

const ctc = require('../src')
const countries = require('../src/data/countries')
const timezones = require('../src/data/timezones')
const currencies = require('../src/data/currencies')

test(`List all countries`, () => {
  expect(ctc.countries()).toEqual(countries)
})

test(`Get country by name`, () => {
  const result = [{
    code: 'PT',
    name: 'Portugal',
    timezones: [ 'Europe/Lisbon', 'Atlantic/Madeira', 'Atlantic/Azores' ],
    currencies: [ 'EUR' ]
  }]
  expect(ctc.countries('Portugal')).toEqual(result)
})

test(`List all timezones`, () => {
  expect(ctc.timezones()).toEqual(timezones)
})

test(`Get all timezones of a country`, () => {
  const result = [{
    name: 'Europe/Amsterdam',
    utcOffset: 60,
    offsetStr: '+01:00',
    countries: [ 'NL' ]
  }]
  expect(ctc.timezones('Netherlands')).toEqual(result)
})

test(`Get all currencies`, () => {
  expect(ctc.currencies()).toEqual(currencies)
})

test(`Get currencies for codes`, () => {
  const result = [{
    symbol: 'HTG',
    name: 'Haitian gourde',
    symbol_native: 'G',
    decimal_digits: 2,
    rounding: 0,
    code: 'HTG',
    name_plural: 'Haitian gourdes' },
  { symbol: '$',
    name: 'US Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'USD',
    name_plural: 'US dollars'
  }]
  expect(ctc.currencies(['HTG', 'USD'])).toEqual(result)
})

test(`Get currencies expects an array of currency codes`, () => {
  const result = console.log(`Please provide an Array with currency codes,
                              e.g. [ 'EUR', 'USD' ]`)
  expect(ctc.currencies('USD')).toEqual(result)
})

test(`Search for a country`, () => {
  const result = [{
    code: 'BQ',
    name: 'Caribbean Netherlands',
    timezones: [ 'America/Curacao' ],
    currencies: [ 'USD' ]
  },
  { code: 'NL',
    name: 'Netherlands',
    timezones: [ 'Europe/Amsterdam' ],
    currencies: [ 'EUR' ]
  }]

  expect(ctc.search('neth')).toEqual(result)
})
