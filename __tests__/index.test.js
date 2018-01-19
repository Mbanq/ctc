'use strict'

const ctc = require('../src')
const countries = require('../src/data/countries')
const timezones = require('../src/data/timezones')

test(`List all countries`, () => {
  expect(ctc.countries()).toEqual(countries)
})

test(`Get country by name`, () => {
  const result = [{
    code: 'PT',
    name: 'Portugal',
    timezones: [ 'Europe/Lisbon', 'Atlantic/Madeira', 'Atlantic/Azores' ]
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

test(`Search for a country`, () => {
  const result = [{
    code: 'BQ',
    name: 'Caribbean Netherlands',
    timezones: [ 'America/Curacao' ]},
  { code: 'NL',
    name: 'Netherlands',
    timezones: [ 'Europe/Amsterdam' ]
  }]

  expect(ctc.search('neth')).toEqual(result)
})
