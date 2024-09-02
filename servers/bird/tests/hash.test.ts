import { RPC_URL, SAITAMA_ACCESS_TOKEN } from "@/config";
import { encodeParams } from "@saitamafun/wallet";

console.log(
  encodeParams({
    rpcEndpoint: RPC_URL,
    accessToken: SAITAMA_ACCESS_TOKEN,
  })
);
