export const getDataByPathParams = (data, locationType, locationName) => {
  if (!locationType || !locationName) return [];

  return data.filter(restaurant =>
    restaurant[locationType] &&
    restaurant[locationType].toLowerCase() === locationName.trim().toLowerCase()
  );
};
