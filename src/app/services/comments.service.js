import httpService from './http.service';

const commentEndpoint = 'comments/';

const commentService = {
  getCommentsByIdCard: async (idCard) => {
    const { data } = await httpService.get(commentEndpoint + `?postId=${idCard}`);
    return data;
  }
};

export default commentService;
