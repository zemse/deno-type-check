# type_check
Runtime type check library for Deno 

```typescript
import { t, validate, check } from "https://raw.githubusercontent.com/zemse/deno-type-check/master/mod.ts";

function submitAge(age: number): void {
  // Throws if not a unsigned integer (non-negative)
  validate(age, t.uint);

  // OR To receive a boolean
  if(check(age, t.uint)) {}
}

function fetchTransactionAmount(hash: string): number {
  // Throws if not a 32 byte hex string
  validate(hash, t.hex32);

  // OR To receive a boolean
  if(check(hash, t.hex32)) {}
}

// To work with optional multiple types
function enterAmount(input: number | string) {
  // Throws if all the type checks fail
  validateMultiple(input, [t.number, t.hex]);
}
```

## Type Checkers Available

### String
- string
- hex
- hex20
- hex32
- hex65

### Nubmer
- number
- int
- uint
- uint8

### Objects
- array
- uint8array
- functionObject
- object