import axios from "axios";

export const users = async (req, res) => {
  const baseUrl = `https://api.kelvindata.com/rest/v1/search-v2?apiKey=${process.env.DATA_KEY}`;
  const response = await axios.get(baseUrl);
  res.status(200).json({
    data: response.data,
  });
};
