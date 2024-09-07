---
title: Send transaction
slug: send-transaction
---

# Send transaction
To approve and send transaction

```ts 
const signature = await adapter.sendTransaction(
    connection: Connection,
    transaction: Transaction
);
```

## Simulate Transaction
We provide a utility function to simulate transaction before sending

```ts
import { simulateTransaction, Api } from "@saitamafun/wallet";

const result = await simulateTransaction(
    api: Api, 
    connection: Connection, 
    transaction: VersionedTransaction, 
    adapter.publicKey: PublicKey
);
```

## Legacy transaction to vTransaction

To convert legacy transaction

```ts
import { legacyTransactionToV0Transaction } from "@saitamafun/wallet";

const transaction = await legacyTransactionToV0Transaction(
    connection: Connection, 
    transaction: Transaction
);
```