# helper-library

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
npm install --save helper-library
```

## Usage

```typescript
import { Helper } from 'helper-library';
Helper.NUMBER.format(100000);
```

## Date Helpers

```javascript
Helper.DATE.
```

-   toString
-   jalaliPeriod
-   getDuration

## Number Helpers

```javascript
Helper.NUMBER.
```

-   toFA
-   format

## String Helpers

```javascript
Helper.STRING.
```

-   random
-   escapeHTML
-   getFileName

## Time Helpers

```javascript
Helper.TIME.
```

-   toString
-   getDuration

## Tests

```bash
git clone https://github.com/webilix/helper-library.git
npm install
npm test
```
