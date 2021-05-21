//Public API keys:
const PUBLIC_KEY="fee0c64d0320fe9c6662ad7516e5643b"
const PRIVATE_KEY="3d09b1b2c5c500b16c0947121f846e8d67275c3f"
const API_URL="https://gateway.marvel.com/"
const ts=1
// md5='13d09b1b2c5c500b16c0947121f846e8d67275c3ffee0c64d0320fe9c6662ad7516e5643b'

//md5 hash obtained via https://www.md5hashgenerator.com/
const hash='c9a5c9158b8f213bb2d44c5b1de2fea6'

export const getCharacters = async () => {
  try {
    let url = `${API_URL}v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
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

