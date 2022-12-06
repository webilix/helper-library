# @webilix/helper-library

JavaScript/TypeScript programming helper library.

## Table of contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Date Helpers](#date-helpers)
-   [Number Helpers](#number-helpers)
-   [String Helpers](#string-helpers)
-   [Time Helpers](#time-helpers)
-   [Tests](#tests)

## Installation

```bash
npm install --save @webilix/helper-library
```

## Usage

```typescript
import { Helper } from '@webilix/helper-library';
Helper.NUMBER.format(100000);
```

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

## Time Helpers

```javascript
Helper.TIME.
```

-   getDuration
-   toString

## Tests

```bash
git clone https://github.com/webilix/helper-library.git
npm install
npm test
```
