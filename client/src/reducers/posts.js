import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes"

export default (posts = [], action) => {
  switch (action.type) {
   case 'DELETE':
    return posts.filter((post)=>post.id != action.payload);
    case'UPDATE':
    case'Like':
    return posts.map((post)=>post._id === action.payload._id ? action.payload : post);

    case "Fetch_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
