const contractPerNetwork = {
	testnet: "tkn.lucidnft.testnet",
};

export const networkId = "testnet";
export const NetworkId = "testnet";
export const DonationNearContract = contractPerNetwork[NetworkId];
export const TOKEN_CONTRACT = networkId === 'testnet' ? 'v1.fortuna-draco.near' : 'v1.fortuna-draco.near';
export const PIKE_API = 'https://api.pikespeak.ai';
export const PIKE_API_KEY = '88bdbc9b-842c-49d5-ba78-c4324d3c8ae9';
