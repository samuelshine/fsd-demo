import http from 'node:http';
import { getDataFromDB } from './database/db.js';
import { sendJSONResponse } from './utils/sendJSONResponse.js';
import { getDataByPathParams } from './utils/getDataByPathParams.js';
import { getDataByQueryParams } from './utils/getDataByQueryParams.js';

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const restaurants = await getDataFromDB();

  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const queryObj = Object.fromEntries(urlObj.searchParams);

  // Main query search for restaurants
  if (urlObj.pathname === '/api' && req.method === 'GET') {
    const filteredData = getDataByQueryParams(restaurants, queryObj);
    sendJSONResponse(res, 200, filteredData);
  }

  // Filter by location (neighbourhood in Bangalore)
  else if (req.url.startsWith('/api/location') && req.method === 'GET') {
    const location = decodeURIComponent(req.url.split('/').pop());
    const filteredData = getDataByPathParams(restaurants, 'location', location);
    sendJSONResponse(res, 200, filteredData);
  }

  // Filter by restaurant name
  else if (req.url.startsWith('/api/name') && req.method === 'GET') {
    const name = decodeURIComponent(req.url.split('/').pop()).toLowerCase();
    const filteredData = restaurants.filter(restaurant => 
      restaurant.name.toLowerCase().includes(name)
    );
    sendJSONResponse(res, 200, filteredData);
  }


  // 404 for anything else
  else {
    sendJSONResponse(res, 404, { error: 'not found', message: 'Requested route does not exist' });
  }
});

server.listen(PORT, () => console.log(`Server is running on : ${PORT}`));
