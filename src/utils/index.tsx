export const getId = (url: string) => {
  let m = url.match(/\/(\d+)\//);
  if (m) return getImgUrl(parseInt(m[1]));
};

export const getImgUrl = (id: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
};

export const ucFirst = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
