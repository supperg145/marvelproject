import { MD5 } from "crypto-js";

const API_URL = process.env.REACT_APP_BASE_URL;

const getHash = (ts, secretKey, publicKey) => {
    return MD5(ts + secretKey + publicKey).toString();
};

const checkApiKeys = (apiKey, privateKey) => {
    if (!apiKey) {
        console.warn("API key is missing. Please provide a valid API key.");
    }

    if (!privateKey) {
        console.warn("Private key is missing. Please provide a valid private key.");
    }
};

const fetchHeroes = async (value) => {
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    checkApiKeys(apiKey, privateKey);

    let baseUrl = `${API_URL}/v1/public/characters`;

    let ts = Date.now().toString();
    let hash = getHash(ts, privateKey, apiKey);

    let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.data.results);
        return data.data.results;
    } catch (err) {
        console.error(err);
        return;
    }
}

const fetchHero = async (id) => {
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    checkApiKeys(apiKey, privateKey);

    let baseUrl = `${API_URL}/v1/public/characters/${id}`;

    let ts = Date.now().toString();
    let hash = getHash(ts, privateKey, apiKey);

    let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.data.results);
        return data.data.results;
    } catch (err) {
        console.error(err);
        return;
    }
}

export { fetchHeroes, fetchHero, getHash };
