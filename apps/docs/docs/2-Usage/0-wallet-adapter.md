---
title: Solana Wallet Adapter
---

# Solana Wallet Adapter

To use `@saitamafun/wallet` with solana adapter and react, first you need install the following packages.


```bash
bun install @solana/wallet-adapter @solana/wallet-adapter-react
```


Then setup 

```tsx
import { useMemo } from "react";
import SaitamaWalletAdapter from "@saitamafun/wallet/adapter";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";

export default function Provider(){
    const wallets = useMemo(() => [
        new SaitamaWalletAdapter({
            accessToken: string, 
            rpcEndpoint: string
        })
    ], []);

    return (
        <ConnectionProvider endpoint={string}>
            <WalletProvider 
                wallets={wallets} 
                autoConnect>
                {children}
            </WalletProvider>
        </ConnectionProvider>
    );
}

```