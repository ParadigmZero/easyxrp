# About

Generate Ripple XRP wallet address and private key.

Since this uses Ripples official library, and is open-source, and you can run locally on your own device, risk of private key being compromised is minimized.

Wallet address will not be activated until a minimum amount of XRP is sent to it. At this time it is 1 XRP. Refer to the official documentation:

<https://xrpl.org/docs/concepts/accounts/reserves>


# Setup

Requires NodeJS to be installed.

If you have Node Version Manager (NVM), enter `nvm install` in this project's root directory.

# Run

`npm start`

Or,

# Global install

install:

`npm i -g`

run:

`npx easyxrp`

# Additional info

The ledger is public, so anyone with the wallet address, can lookup the balance and transactions, for instance here:

<https://xrpscan.com/>

XRP can be sent to that address, but to send XRP out of that address the private key is required. Transactions are not reversible, so never give away private keys.