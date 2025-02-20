# About

Easily, generate a potential Ripple XRP wallet address (with private key .etc), or check balance of any wallet.

Can be run as a standalone npx script, or used as an external library.

Since this uses Ripples official libraries, and is open-source, and you can run locally on your own device, risk of private key being compromised when generating a new (potential) wallet is minimized.

Wallet address will not be activated until a minimum amount of XRP is sent to it. Refer to the reserve amount as to what this is:

<https://xrpl.org/docs/concepts/accounts/reserves>

# Running (standalone)

Requires NodeJS to be installed.

## remotely via npx

generate new potential XRP wallet details:

`npx easyxrp`

check the balance of a wallet:

`npx easyxrp <ENTER_WALLET_ADDRESS>`

## locally

If you have Node Version Manager (NVM), enter `nvm install` in this project's root directory.

### Run

`npm start`

# Usage as library (node module)

```JavaScript
import {generateXRPWallet, checkXRPBalance} from 'easyxrp';

const walletDetails = generateXRPWallet();
checkXRPBalance("enteravalidwalletaddress");
```


# Additional info

The ledger is public, so anyone with the wallet address, can lookup the balance and transactions, for instance here:

<https://xrpscan.com/>

XRP can be sent to that address, but to send XRP out of that address the private key is required. Transactions are not reversible, never give away private keys.
