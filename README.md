# About

Generate Ripple XRP wallet address and private key.

Can be run as a standalone npx script, or used as an external library.

Since this uses Ripples official library, and is open-source, and you can run locally on your own device, risk of private key being compromised is minimized.

Wallet address will not be activated until a minimum amount of XRP is sent to it. At this time it is 1 XRP. Refer to the official documentation:

<https://xrpl.org/docs/concepts/accounts/reserves>

# Running (standalone)

Requires NodeJS to be installed.

## remotely via npx

`npx easyxrp`

## locally

If you have Node Version Manager (NVM), enter `nvm install` in this project's root directory.

### Run

`npm start`

# Usage as library (node module)

`import { generateXRPwallet } from 'easyxrp';`

`generateXRPwallet()` returns object:

```
{
    seed: string;
    walletAddress: string;
    privateKey: string;
}
```

# Additional info

The ledger is public, so anyone with the wallet address, can lookup the balance and transactions, for instance here:

<https://xrpscan.com/>

XRP can be sent to that address, but to send XRP out of that address the private key is required. Transactions are not reversible, never give away private keys.