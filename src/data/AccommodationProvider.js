class AccommodationProvider {
  constructor() {
    this.data = [];
  }

  async fetchData() {
    try {
      const response = await fetch("/data.json");
      this.data = await response.json();
    } catch (error) {
      console.error("Erreur lors de la récupération des données", error);
    }
  }

  async getAllAccomodations() {
    if (this.data.length === 0) {
      await this.fetchData();
    }
    return this.data;
  }

  async getAccommodationById(id) {
    if (this.data.length === 0) {
      await this.fetchData();
    }
    return this.data.find((accommodation) => accommodation.id === id);
  }
}

const instance = new AccommodationProvider();
export default instance;
