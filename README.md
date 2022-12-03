# @webilix/helper-library

JavaScript/TypeScript programming helper library.

## Table of contents

-   [Installation](#installation)
-   [Usage](#usage-typescript)
-   [Date Helpers](#date-validators)
-   [Number Helpers](#number-validators)
-   [String Helpers](#string-validators)
-   [Time Helpers](#time-validators)
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

## String Helpers

```javascript
Helper.STRING.
```

-   escapeHTML
-   getBankCardView
-   getFileName
-   getMobileView
-   getRandom

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
