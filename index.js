const axios = require("axios");
require('dotenv').config();
(async () => {
  const response = await axios.get(
    'http://localhost:4000/api/reports?startDate=2022-09-01&endDate=2022-09-30&groupBy=client&billableType=&clientId=&userId=&projectId=&exportType=csv',
    {
      headers: {
        "content-type": "text/csv",
        "Authorization": `Bearer ${process.env.AUTH_TOKEN}`,},
       responseType: 'blob' }
  );
  console.log('response.header ',response.headers['content-disposition'].replace(/\"/g,'').split('filename=')[1]);
})();
