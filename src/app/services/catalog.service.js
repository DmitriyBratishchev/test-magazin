import httpService from './http.service';

const catalogEndpoint = 'posts/';

const catalogService = {
  get: async () => {
    const { data } = await httpService.get(catalogEndpoint);
    return data;
  },
  getFiler: async (query) => {
    const { data } = await httpService.get(catalogEndpoint + `?${query}`);
    return data;
  },
  getCartById: async (id) => {
    const { data } = await httpService.get(catalogEndpoint + id);
    return data;
  }
  // create: async (payload) => {
  //   const { data } = await httpService.post(catalogEndpoint, payload);
  //   console.log('catalog create data', data);
  //   return data;
  // },
  // edit: async (payload) => {
  //   const { data } = await httpService.put(catalogEndpoint + payload._id, payload);
  //   console.log('catalog edit element', data);
  //   return data;
  // },
  // remove: async (payload) => {
  //   const { data } = await httpService.delete(catalogEndpoint + payload._id);
  //   console.log('catalog remove element', data);
  //   return data;
  // }
};

export default catalogService;
