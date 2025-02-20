import { generateSeed, deriveKeypair, deriveAddress } from "ripple-keypairs";
import { Client, dropsToXrp } from 'xrpl';

export const XRP_SERVER = "wss://xrplcluster.com/";

/**
 * Generate new XRP wallet details (will need to be activated separately)
 * @function
 * @return {object} XRP wallet: seed, walletAddress, privateKey
 */
export function generateXRPWallet() {
    const seed = generateSeed();
    const keypair = deriveKeypair(seed);
    return {
        seed: seed,
        walletAddress: `${deriveAddress(keypair.publicKey)}`,
        privateKey: `${keypair.privateKey}`,
    }
};

/**
 * Check balance on XRP wallet address. Throws an error on false/non-existent XRP wallet address
 * or timeout .etc
 * @function
 * @throws {Error}
 * @param {string} walletAddress - XRP wallet address
 * @return {string} balance (in XRP)
 */
export async function checkXRPBalance(walletAddress) {
    const client = new Client(XRP_SERVER)
    await client.connect();
    let response;
    try {
        response = await client.request({
            "command": "account_info",
            "account": walletAddress,
            "ledger_index": "validated"
        });
    }
    catch (error) {
        await client.disconnect();
        throw error;
    }

    await client.disconnect();
    return dropsToXrp(response.result.account_data.Balance);
}