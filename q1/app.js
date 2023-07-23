const express = require("express");
const axios = require("axios");

const app = express();
const port = 8008;

// GET /numbers endpoint
app.get("/numbers", async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({
      error: 'Please provide at least one URL in the "url" query parameter.',
    });
  }

  const urlArray = Array.isArray(urls) ? urls : [urls];

  const responses = await Promise.allSettled(urlArray.map(fetchData));

  const numbers = [];
  for (const response of responses) {
    if (
      response.status === "fulfilled" &&
      response.value &&
      Array.isArray(response.value.numbers)
    ) {
      numbers.push(...response.value.numbers);
    }
  }

  const uniqueNumbers = Array.from(new Set(numbers)).sort((a, b) => a - b);

  res.json({ numbers: uniqueNumbers });
});

// Fetch data from the provided URL
async function fetchData(url) {
  try {
    const response = await axios.get(url, { timeout: 500 });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from URL ${url}: ${error.message}`);
    return null;
  }
}

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
