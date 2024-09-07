---
title: Select Mint
slug: select-mint
---

# Select mint or token 

When building an application with our wallet widget, you can prompt users to select a mint to work with.

```ts
const mintPortfolio = await adapter.selectMint();
const { mint, metadata } = mintPortfolio;
const isNative = SystemProgram.programId.equals(
    new ProgramId(mint.address)
); 

if(isNative)
    createNativeTransactionInstruction();
else
    createTransactionInstruction(mint);
```

> selectMint is a blocking function and won't resolve until widget is closed.