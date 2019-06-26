import { get } from './HttpService';

const YOUTUBE_KEY = 'AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc';

const searchVideo = query => {
  return get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${ query }&key=${ YOUTUBE_KEY }`);
}

export {
  searchVideo
};