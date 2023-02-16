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
-   [Date Helpers](#date-helpers)
-   [Number Helpers](#number-helpers)
-   [Plate Helpers](#plate-helpers)
-   [String Helpers](#string-helpers)
-   [Time Helpers](#time-helpers)

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
-   date
-   domain
-   email
-   hexColor
-   ip4
-   jsonDate
-   mobile
-   nationalCode
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

### Date Helpers

```javascript
Helper.DATE.
```

-   getDuration
-   getSeconds
-   jalaliPeriod
-   toString

### Number Helpers

```javascript
Helper.NUMBER.
```

-   format
-   toEN
-   toFA
-   toFileSize

### Plate Helpers

```javascript
Helper.PLATE.
```

-   letters
-   getPlate
-   toString

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
