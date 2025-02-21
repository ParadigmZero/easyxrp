# About

Easily, generate a potential Ripple XRP wallet address (with private key .etc), or check balance of any wallet.

Can be run as a standalone npx script, or used as an external library.

Since this uses Ripples official libraries, and is open-source, and you can run locally on your own device, risk of private key being compromised when generating a new (potential) wallet is minimized.

Wallet address will not be activated until a minimum amount of XRP is sent to it. Refer to the reserve amount as to what this is:

<https://xrpl.org/docs/concepts/accounts/reserves>


# Running

Requires NodeJS to be installed.

##  Executable (Node npx)
### Run executable remotely

generate new potential XRP wallet details:

`npx easyxrp` or `npx easyxrp <ENTER_WALLET_ADDRESS>`

### Run executable locally

install globally:

`npm i easyxrp -g`

then you can run it offline, without even needing an internet connection. In your terminal:

`easyxrp` or `easyxrp <ENTER_WALLET_ADDRESS>`

## Running for development

optional: if you are using `nvm` enter `nvm install`

`npm start` or `npm start <ENTER_WALLET_ADDRESS>`

# Usage as library (npm Node module)

```JavaScript
import {generateXRPWallet, checkXRPBalance} from 'easyxrp';

const walletDetails = generateXRPWallet();
checkXRPBalance("enteravalidwalletaddress");
```


# Additional info

The ledger is public, so anyone with the wallet address, can lookup the balance and transactions, for instance here:

<https://xrpscan.com/>

XRP can be sent to that address, but to send XRP out of that address the private key is required. Transactions are not reversible, never give away private keys.
