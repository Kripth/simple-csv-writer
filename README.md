simple-csv-writer
=================

Converts a JavaScript array into a CSV string based on to the [RFC 4180 standard](https://tools.ietf.org/html/rfc4180).

[![npm](https://img.shields.io/npm/v/simple-csv-writer)](https://npmjs.org/package/simple-csv-writer)

## Usage

**simple-csv-writer** can be imported as an AMD module or globally as the `writecsv` function.
The first argument must be an array of arrays, where each array is a line and each value of that array is the comma-separated value.
The second argument is an optional object that can be used to change the default separator using the `separator` key (default is `,`) and the default line separator using the `newLine` key (default is `\r\n`).

This library only serializes the input and does not perform any check on the length of the lines.

```js
import writecsv from "simple-csv-writer";

const data = [
	["1", "simple text"],
	["2", "with \"quotes\""],
	["3", "with separator, and \nnewline"]
];

writecsv(data);
```
```csv
1,simple text
2,"with ""quotes"""
3,"with separator, and 
newline"
```