import httpService from './http.service';

const commentEndpoint = 'comments/';

const commentService = {
  getCommentsByIdCart: async (idCart) => {
    const { data } = await httpService.get(commentEndpoint + `?postId=${idCart}`);
    return data;
  }
};

export default commentService;
