import axios from "axios";

const api = axios.create({
  baseURL: "https://www.cbr-xml-daily.ru/",
});

function apiGet(url: string) {
  return api.get(url);
}

export { apiGet };
