---
slug: /event
title: Wallet events
---

# Events

You can subscribe to events from wallets to perform custom actions.

```ts
await adapter.subscribe(event: Event.PostEvent, undefined, (data) => {

});
```
Below are list of some of events available to consume

| Event                      | Description                                                                                                |
| -------                    | ------------                                                                                              |
| modal                      |  When modal is open or closed                                                                             |
| authentication.initialize |  When using custom authentication, this is fired to request for authentication credentials or data        |
| wallet                     |  When wallet is connected or authenticating                                                               |
| wallet.error               |  When an error occur when wallet is opened                                                                |
| set.cookie                 |  Set third party cookie useful in telegram context, check examples                                        |
| delete.cookie              |  Delete third party cookie                                                                                |


> These events are only expected to be listen to expect `authentication.initialize` that require extra steps.