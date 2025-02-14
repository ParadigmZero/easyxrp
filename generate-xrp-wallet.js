import { generateSeed, deriveKeypair, deriveAddress } from "ripple-keypairs";

export function generateXRPwallet() {
    const seed = generateSeed();
    const keypair = deriveKeypair(seed);
    return {
        seed: seed,
        walletAddress: `${deriveAddress(keypair.publicKey)}`,
        privateKey: `${keypair.privateKey}`,
    }
};