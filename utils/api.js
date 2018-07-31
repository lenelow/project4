import axios from "axios";

class API {
  constructor() {
    this.api = axios.create({
      baseURL: "https://www.anapioficeandfire.com/api"
    });
  }
  getCharacterDetails() {
    return this.api.get(`/characters/${id}`);
  }
  getHouseDetails() {
    return this.api.get(`/houses/${id}`);
  }
  getHouses() {
    return this.api.get("/houses");
  }
}

export default new API();
