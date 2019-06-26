const getLargestImage = list => {
  let maxWidth = 0;
  let largestIndex = 0;
  list.forEach(({width}, index) => {
    if( width > maxWidth ) {
      maxWidth = width;
      largestIndex = index
    };
  });
  return list[largestIndex]['url'];
}

const getSocialUrl = (type, types) => {
  if( !Object.keys(types).includes(type) ) return null;
  return types[type][0]["url"];
}

export {
  getLargestImage,
  getSocialUrl
};