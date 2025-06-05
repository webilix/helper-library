# @webilix/helper-library

JavaScript/TypeScript helper library.

## Table of contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Tests](#tests)

### Regular Expressions

-   [Regular Expression Types](#regular-expression-types)
-   [Regular Expression Methods](#regular-expressions-methods)

### Validators

-   [IS Helpers](#is-helpers)
-   [IS ARRAY Helpers](#is-array-helpers)
-   [IS STRING Helpers](#is-string-helpers)

### Helpers

-   [Bank Helpers](#bank-helpers)
-   [Color Helpers](#color-helpers)
-   [Date Helpers](#date-helpers)
-   [Geo Helpers](#geo-helpers)
-   [Number Helpers](#number-helpers)
-   [Password Helpers](#password-helpers)
-   [Plate Helpers](#plate-helpers)
-   [State Helpers](#state-helpers)
-   [String Helpers](#string-helpers)
-   [Time Helpers](#time-helpers)

### Unit Helpers

-   [Types](#unit-types)
-   [Methods](#unit-methods)

## Installation

```bash
npm install --save @webilix/helper-library
```

## Usage

```typescript
import { Helper } from '@webilix/helper-library';

Helper.NUMBER.format(100000);
// ۱۰۰,۰۰۰

Helper.NUMBER.format(100000, 'EN');
// 100,000
```

## Tests

```bash
git clone https://github.com/webilix/helper-library.git
npm install
npm test
```

<br>

---

<br>

## Regular Expressions

<br>

### Regular Expression Types

```javascript
Helper.RE.
```

-   DATE
-   DOMAIN
-   EMAIL
-   HEX_COLOR
-   HSL_COLOR
-   IP4
-   JSON_DATE
-   MOBILE
-   NUMERIC
-   PASSWORD
-   RGB_COLOR
-   TIME
-   URL
-   USERNAME

### Regular Expression Methods

```javascript
Helper.RE.{TYPE}.
```

-   get
-   find
-   replace
-   verify

<br>

---

<br>

## Validators

<br>

### IS Helpers

```javascript
Helper.IS.
```

-   array
-   boolean
-   date
-   empty
-   null
-   number
-   object
-   plate
-   string

### IS ARRAY Helpers

```javascript
Helper.IS.ARRAY.
```

-   in
-   unique

### IS STRING Helpers

```javascript
Helper.IS.STRING.
```

-   bankCard
-   color
-   date
-   domain
-   email
-   hexColor
-   ip4
-   jsonDate
-   mobile
-   nationalCode
-   number
-   numeric
-   objectId
-   time
-   url

<br>

---

<br>

## Helpers

<br>

### Bank Helpers

#### Iran bank cards numbers functionalities

```javascript
Helper.BANK.
```

-   findCard
-   getList

### Color Helpers

#### Supported formats: HEX, HSL, RGB

```javascript
Helper.COLOR.
```

-   getFormat
-   getGradient
-   getShade
-   toHEX
-   toHSL
-   toRGB

### Date Helpers

```javascript
Helper.DATE.
```

-   getDays
-   getMonths
-   getDuration
-   getSeconds
-   jalaliPeriod
-   toString

### Geo Helpers

```javascript
Helper.GEO.
```

-   location
-   distance
-   routeLength

### Number Helpers

```javascript
Helper.NUMBER.
```

-   format
-   getTitle
-   toEN
-   toFA
-   toFileSize

### Password Helpers

```javascript
Helper.PASSWORD.
```

-   generate
-   getStrength

### Plate Helpers

```javascript
Helper.PLATE.
```

-   letters
-   getPlate
-   toString

### State Helpers

```javascript
Helper.STATE.
```

-   states
-   cities
-   findOneById
-   findByTitle
-   findOneByTitle
-   CITY.findByState
-   CITY.findOneById
-   CITY.findByTitle
-   CITY.findOneByTitle

### String Helpers

```javascript
Helper.STRING.
```

-   changeNumbers
-   escapeHTML
-   getBankCardView
-   getFileName
-   getMobileView
-   getRandom
-   hasPersian
-   toFileSize

### Time Helpers

```javascript
Helper.TIME.
```

-   getDuration
-   toString

<br>

## UNIT Helpers

<br>

### Unit Types

```javascript
Helper.UNIT.
```

-   AREA
-   LENGTH
-   VOLUME
-   WEIGHT

<br>

### Unit Methods

```javascript
Helper.UNIT.{TYPE}.
```

-   list
-   options
-   getTitle
-   getRate
-   convert
