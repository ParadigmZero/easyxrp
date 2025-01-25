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

# Output

example:

```
wallet address (public):
rs8Xtg9r4PXt4nb4zaxycsfu5REW43jXRo

private key (keep secret):
004D65074963BCA9800XYZX851186781E1BC8C38288748DBCE52FCFC3E43A16524
```

The ledger is public, so anyone with the wallet address, will know balance, and transactions. XRP can also be sent to that address.

The private key is required to send


