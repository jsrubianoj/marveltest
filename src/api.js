//Public API keys:
const PUBLIC_KEY = "fee0c64d0320fe9c6662ad7516e5643b";
const API_URL = "https://gateway.marvel.com/";
const ts = "1";
const hash = "c9a5c9158b8f213bb2d44c5b1de2fea6";

export const getCharacters = async (limit = 15, offset = 0) => {
  try {
    let url = `${API_URL}v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getCharacterData=async(url)=>{
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
}

