import { getApiStarWars } from './getApiStarWars';
function filtered(array, value) {
  if (!value) {
    return [];
  }
  const tempArray = [];
  const valueArray = value.split('');
  const firstChar = valueArray[0].toUpperCase();
  valueArray[0] = firstChar;
  const changedValue = valueArray.join('');
  array.map((element) => {
    if (element.name.indexOf(changedValue) !== -1) {
      tempArray.push(element);
    }
  });
  return tempArray;
}
function getIdICharacters(url) {
  return url.replace('https://swapi.dev/api/people', '').replace(/[^0-9]/g, '');
}
function checkFavoritePeople(arr, obj) {
  const found = arr.find((element) => element.name === obj.name);
  if (found === undefined) {
    return false;
  } else {
    return true;
  }
}
function getIdCharactersFromFilms(url) {
  return url.replace('https://swapi.dev/api/films', '').replace(/[^0-9]/g, '');
}

const getDataFromApi = async (url) => {
  const res = await getApiStarWars(url);
  return res;
};
export {
  filtered,
  getIdICharacters,
  checkFavoritePeople,
  getIdCharactersFromFilms,
  getDataFromApi,
};
