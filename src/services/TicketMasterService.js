import { get } from './HttpService';

const TICKETMASTER_KEY = 'q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG';

const searchAttractions = query => {
  return get(`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${ query }&apikey=${ TICKETMASTER_KEY }`);
};

export {
  searchAttractions
};