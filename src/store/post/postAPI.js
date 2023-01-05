import axios from "axios";

export function fetchPost(postOffset) {
  console.log(postOffset);
  return axios({
    url: "http://3.39.32.185:8080/api/post/search/all",
    method: "get",
    params: { offset: postOffset, limit: 6 },
  });
}

export function fetchViewPostDetail(post_id) {
  return new Promise(resolve =>
    setTimeout(() => resolve({ data: post_id }), 0)
  );
}
