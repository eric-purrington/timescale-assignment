const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  let marvelHeroes = [];
  heroes.map(hero => {
    if (hero.publisher == "Marvel Comics") {
      marvelHeroes.push(hero.superhero);
    }
  });
  return marvelHeroes;
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  heroes.map(hero => {
    hero.characters = hero.characters.split(", ");
  })
  return heroes;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  let marvelArray = [];
  let dcArray = [];
  let newHeroes = {};
  heroes.map(hero => {
    if (hero.publisher == "DC Comics") {
      dcArray.push(hero);
    } else {
      marvelArray.push(hero);
    }
  });
  newHeroes["DC Comics"] = dcArray;
  newHeroes["Marvel Comics"] = marvelArray;
  return newHeroes;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  return heroes.filter(hero => {
    if (hero.characters.length > 1 && hero.publisher == "DC Comics") {
      return true
    } else {
      return false
    }
  });
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
