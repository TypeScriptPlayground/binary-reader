# Binary Reader
A binary reader package to read binary data.

## Add Package
```
deno add jsr:@typescriptplayground/binary-reader
```

## Usage
```ts
import {BinaryReader} from "@typescriptplayground/binary-reader";

const dataToRead = new Uint8Array([1,2,3,4])

const reader = new BinaryReader(dataToRead.buffer);

console.log(reader.read(2)) // ArrayBuffer { [Uint8Contents]: <01 02>, byteLength: 2 }

console.log(reader.bufferLeft.byteLength) // 2

console.log(reader.readInt16()) // 772

console.log(reader.bufferLeft.byteLength) // 0
```
