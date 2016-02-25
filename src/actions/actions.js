let nextCatId = 0;

export const addCat = (name) => ({
  type: 'ADD_CAT',
  id: nextCatId++,
  name
});

export const adoptCat = (id) => ({
  type: 'ADOPT_CAT',
  id
});
