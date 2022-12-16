import { faker } from "@faker-js/faker";
import axios from "axios";
import shortid from "shortid";

export function fetchPost() {
  return axios({
    url: "http://3.39.32.185:8080/api/post/search/all",
    method: "get",
  });
}

export function fetchMorePost() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ data: generateDummyPost(3) }), 600)
  );
}
export function fetchViewPostDetail(post_id) {
  return new Promise(resolve =>
    setTimeout(() => resolve({ data: post_id }), 0)
  );
}

const generateDummyPost = number =>
  Array(number)
    .fill()
    .map(() => ({
      post_id: shortid.generate(),
      title: faker.name.fullName(),
      content: faker.name.fullName(),
      recruit_status: "RECRUIT",
      recruit_capacity: 4,
      contact_type: "KAKAO_OPEN_CHAT",
      contact: "p.stone@kakao.com",
      start_date: "2021-08-15",
      expected_term: 21,
      poster_id: 1,
      poster_nickname: faker.name.fullName(),
      designated_stacks: ["React", "Angular"],
      created_date: "2022-11-24",
      modified_date: "2022-11-24",
    }));
