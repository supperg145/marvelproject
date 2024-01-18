// Import the necessary modules
import { getHash } from "../Utilities/utils";
import { MD5 } from "crypto-js";

// Mock the required values
const ts = 'mockTimestamp';
const secretKey = 'mockSecretKey';
const publicKey = 'mockPublicKey';
const expectedHash = MD5(ts + secretKey + publicKey).toString();

test("getHash function generates a hash for API request", () => {
    // Call the function with the mock values
    const result = getHash(ts, secretKey, publicKey);

    // Check if the result matches the expected hash
    expect(result).toBe(expectedHash);
});
