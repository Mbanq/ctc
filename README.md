# Countries, Timezones and Currencies - `ctc`

Mbanq's library to work with countries, timezones and currencies

## Install

```
npm install --save @mbanq/ctc
```

## Countries

A country object has following attributes:

* **code:** The country code [ISO code](https://es.wikipedia.org/wiki/ISO_3166-1)
* **name:** Name of the country
* **timezones:** An array of the country's timezones

```json
{
  "code": "PT",
  "name": "Portugal",
  "timezones": [
    "Europe/Lisbon",
    "Atlantic/Madeira",
    "Atlantic/Azores"
  ]
}
```

## Timezones

A timezone object has following attributes

* **name:** The name of the timezone.
* **utcOffset:** UTC offset in minutes.
* **offsetStr:** UTC offset in hours (human readable string).
* **countries:** An array of country codes in the timezone.


```json
{
  "name": "Europe/Andorra",
  "utcOffset": 60,
  "offsetStr": "+01:00",
  "countries": [ "AD" ]
}
```

## API

```js
const ctc = require('@mbanq/ctc')
```

`ctc` exposes 3 functions:
* `ctc.countries()` => `Array`
* `ctc.timezones()` => `Array`
* `ctc.search()` => `Array`

### Countries

`countries()` function accepts a country name as a parameter, e.g.
`ctc.countries('Portugal')`

```json
[
  {
    "code": "PT",
    "name": "Portugal",
    "timezones": [
      "Europe/Lisbon",
      "Atlantic/Madeira",
      "Atlantic/Azores"
    ]
  }
]
```

`countries()` function always returns an `Array`

### Timezones

`timezones()` function accepts a country name as a parameter, e.g.
`ctc.timezones('Portugal')`

```json
[
  {
    "name": "Europe/Lisbon",
    "utcOffset": 0,
    "offsetStr": "+00:00",
    "countries": [ "PT" ]
  },
  {
    "name": "Atlantic/Madeira",
    "utcOffset": 0,
    "offsetStr": "+00:00",
    "countries": [ "PT" ]
  },
  {
    "name": "Atlantic/Azores",
    "utcOffset": -60,
    "offsetStr": "-01:00",
    "countries": [ "PT" ]
  }
]
```

If you don't provide a country name to the `timezones()` function - the result
will contain all the timezones

`timezones()` function always returns an `Array`

### Search

`search()` functions accepts a `String` as a parameter and attempts to find
countries that have the provided parameter either in the `name` of the country
or in the country `code`, e.g. `ctc.search('neth')` would produce following
result:

```json
[
  {
    "code": "BQ",
    "name": "Caribbean Netherlands",
    "timezones": [ "America/Curacao" ]
  },
  {
    "code": "NL",
    "name": "Netherlands",
    "timezones": [ "Europe/Amsterdam" ]
  }
]
```

Search is not case sensitive, we `toLowerCase()` everything
