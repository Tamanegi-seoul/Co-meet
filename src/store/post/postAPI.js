import axios from "axios";

export function fetchPost(postOffset) {
  console.log(postOffset);
  return axios({
    url: "http://3.39.32.185:8080/api/post/all?",
    method: "get",
    params: { offset: postOffset, limit: 6 },
  });
}

export function fetchViewPostDetail(postId) {
  return new Promise(resolve => setTimeout(() => resolve({ data: postId }), 0));
}
