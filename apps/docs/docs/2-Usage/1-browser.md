---
title: Browser Usage
---


# Browser Usage 

To use directly in browser as a standalone widget.

### Setup 
This examples assume you are writing using esm and transpiling using webpack or vite.

### Import Adapter

```ts
import SaitamaWalletAdapter from "@saitama/wallet/adapter";
```

### Initialize 

To get accessToken [Contact developer](https://x.com/saitamadotfun)


``` ts
const adapter = new SaitamaWalletAdapter({
    accessToken: string,
    rpcEndpont: string,
});
```

### Connect
Prompt user to login or connect to saitama wallet

```ts
await adapter.connect()
```

Then when promise resolve user must have sign-in to their wallet.