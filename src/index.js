'use strict'

const countriesData = require('./data/countries')
const timezonesData = require('./data/timezones')
const currencyData = require('./data/currencies')

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

// currencyCodes should be an Array
const currencies = (currencyCodes = null) => {
  if (currencyCodes) {
    if (!Array.isArray(currencyCodes)) {
      return console.log(`Please provide an Array with currency codes,
                          e.g. [ 'EUR', 'USD' ]`)
    }
    // const codes = currencyCodes.replace(/\s/g, '').split(',')
    return currencyCodes.map(code => {
      return currencyData.filter(currency => {
        return currency.code === code
      })[0]
    })
  }
  return currencyData
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
  currencies,
  search
}
