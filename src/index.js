'use strict'

const countriesData = require('./data/countries')
const timezonesData = require('./data/timezones')

const countries = (name = null) => {
  if (name) {
    return countriesData
      .filter(country => {
        return country.name.toLowerCase() === name.toLowerCase()
      })
  }
  return countriesData
}

const timezones = (countryName = null) => {
  if (countryName) {
    const countryCode = getCountryCode(countryName) // we need the ID
    return timezonesData
      .filter(timezone => {
        return timezone.countries.includes(countryCode)
      })
  }
  return timezonesData
}

const getCountryCode = (name) => {
  return countriesData
    .filter(country => {
      return country.name === name
    })[0].code
}

const search = (searchTerm) => {
  const term = searchTerm.toLowerCase()
  const q = new RegExp(term, 'g')

  return countriesData
    .filter(country => {
      return country.code.toLowerCase().match(q) || country.name.toLowerCase().match(q)
    })
}

module.exports = {
  countries,
  timezones,
  search
}
