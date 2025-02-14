#! /usr/bin/env node
const { generateSeed, deriveKeypair, deriveAddress } = require("ripple-keypairs");

function generateXRPwallet() {
    const seed = generateSeed();
    const keypair = deriveKeypair(seed);
    return {
        seed: seed,
        walletAddress: `${deriveAddress(keypair.publicKey)}`,
        privateKey: `${keypair.privateKey}`,
    }
};

const wallet = generateXRPwallet();

console.log(
    `XRP wallet will not be activated until the minimum reserve or XRP is sent to to that wallet address.\n\nCheck the official Ripple docs (e.g. https://xrpl.org/docs/concepts/accounts/reserves) as to how much that is\n\nIt is essential you note down the wallet address and private key. The private key must be kept secret.\n\nYou may also note down the seed.\n\nThe seed can be used to derive the wallet and private key, and so must also be kept secret. It can be used with various (trusted) applications, to add this specific wallet.\n\nseed (keep secret):\n${wallet.seed}\n\nwallet address (public):\n${wallet.walletAddress}\n\nprivate key (keep secret):\n${wallet.privateKey}`
);