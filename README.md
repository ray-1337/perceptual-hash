# Perceptual Hash
Generate content-based image hashes on Node.js.

## Installation
```
pnpm add perceptual-hash
npm add perceptual-hash
yarn add perceptual-hash
```

## Usage
```ts
import { generateHash } from "perceptual-hash";

const imageHash = await generateHash(new Uint8Array(Buffer.from(imageBufferHere)));
// => 0773063f063f36070e...
```

## API
```ts
generateHash(Uint8Array, bits?: number); // => Promise<string | null>
```

## License
[MIT](LICENSE)