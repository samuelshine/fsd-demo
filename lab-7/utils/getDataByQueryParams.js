export const getDataByQueryParams = (data, queryObj) => {
  let filteredData = [...data];

  const { location, is_open_to_public } = queryObj;

  if (location && location.trim()) {
    filteredData = filteredData.filter(restaurant =>
      restaurant.location.toLowerCase() === location.trim().toLowerCase()
    );
  }

  if (typeof is_open_to_public !== 'undefined' && is_open_to_public !== '') {
    let openStatus;
    if (typeof is_open_to_public === 'boolean') {
      openStatus = is_open_to_public;
    } else {
      openStatus = JSON.parse(is_open_to_public);
    }
    filteredData = filteredData.filter(restaurant =>
      restaurant.is_open_to_public === openStatus
    );
  }

  return filteredData;
};
