# @webilix/helper-library

JavaScript/TypeScript helper library.

## Table of contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Tests](#tests)

### Validators

-   [IS Helpers](#is-helpers)

    -   [IS ARRAY Helpers](#is-array-helpers)
    -   [IS STRING Helpers](#is-string-helpers)
    -   [IS VALUE Helpers](#is-value-helpers)

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

## IS Helpers

Value and data validator methods

-   ### IS ARRAY Helpers
<div style="margin-left: 2rem;">

```javascript
Helper.IS.ARRAY.
```

-   in
-   unique

</div>

-   ### IS STRING Helpers
<div style="margin-left: 2rem;">

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

</div>

-   ### IS VALUE Helpers
<div style="margin-left: 2rem;">

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

</div>

<br>

---

<br>

## Bank Helpers

#### Iran bank cards numbers functionalities

```javascript
Helper.BANK.
```

-   findCard
-   getList

## Date Helpers

```javascript
Helper.DATE.
```

-   getDuration
-   getSeconds
-   jalaliPeriod
-   toString

## Number Helpers

```javascript
Helper.NUMBER.
```

-   format
-   toEN
-   toFA
-   toFileSize

## Plate Helpers

```javascript
Helper.PLATE.
```

-   letters
-   getPlate
-   isValid
-   toString

## String Helpers

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

## Time Helpers

```javascript
Helper.TIME.
```

-   getDuration
-   toString
