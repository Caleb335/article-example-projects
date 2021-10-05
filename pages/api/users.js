import axios from "axios";

export default async function users(req, res) {
  const {
    query: { firstName, lastName },
  } = req;

  const baseUrl = `https://api.kelvindata.com/rest/v1/search-v2?lastname=${lastName}&firstname=${firstName}&apiKey=${process.env.KEY}`;
  const response = await axios.get(baseUrl);
  res.status(200).json({
    data: response.data,
  });
}
