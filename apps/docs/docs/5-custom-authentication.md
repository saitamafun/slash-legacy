---
slug: custom-authentication
title: Custom authentication
---

# Custom Authentication

Using this event with custom authentication

## Initialize

Initialize adapter with customAuthentication option

```ts
const adapter = new SaitamaWalletAdapter({
    accessToken: string,
    rpcEndpoint: string,
    customAuthentication: [
        {
            provider: "telegram",
            icon: window.location.href + "/telegram.svg";
        }
    ]
});
```

## Listen to event
Subscribe to `authentication.initialize` event and send the `authentication.user` event

```ts
adapter.subscribe("authentication.initialize", undefined, async (data) => {
    switch(data.provider){
        case "telegram":
            const user =  await loginWithTelegram(...args); // custom function
            adapter.sendMessage('authentication.user', user);
            break;
    }
})
```