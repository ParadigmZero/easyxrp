#! /usr/bin/env node
const { generateSeed, deriveKeypair, deriveAddress } = require("ripple-keypairs");

const seed = generateSeed();

const keypair = deriveKeypair(seed);

console.log(
`
XRP wallet will not be activated until the minimum reserve or XRP is sent to to that wallet address. Check the official Ripple docs (e.g. https://xrpl.org/docs/concepts/accounts/reserves) as to how much that is.

It is essential you note down the wallet address and private key. The private key must be kept secret.

You may also note down the seed. The seed can be used to derive the wallet and private key, and so must also be kept secret. It can be used with various (trusted) applications, to add this specific wallet.

seed (keep secret):
${seed}\n
wallet address (public):
${deriveAddress(keypair.publicKey)}\n
private key (keep secret):
${keypair.privateKey}`
);