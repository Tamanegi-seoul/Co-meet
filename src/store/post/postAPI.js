import { faker } from "@faker-js/faker";
import shortid from "shortid";

export function fetchPost() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ data: dummyPost }), 0)
  );
}

export function fetchMorePost() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ data: generateDummyPost(3) }), 600)
  );
}

const generateDummyPost = number =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortid.generate(),
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
const dummyPost = {
  data: [
    {
      post_id: 5,
      title: "need React,Angular study crew!",
      content: "tba",
      recruit_status: "RECRUIT",
      recruit_capacity: 4,
      contact_type: "KAKAO_OPEN_CHAT",
      contact: "p.stone@kakao.com",
      start_date: "2021-08-15",
      expected_term: 21,
      poster_id: 1,
      poster_nickname: "Pansy Stone",
      designated_stacks: ["React", "Angular"],
      created_date: "2022-11-24",
      modified_date: "2022-11-24",
    },
    {
      post_id: 6,
      title: "need React study crew!",
      content: "tba",
      recruit_status: "RECRUIT",
      recruit_capacity: 4,
      contact_type: "KAKAO_OPEN_CHAT",
      contact: "p.stone@kakao.com",
      start_date: "2021-08-15",
      expected_term: 21,
      poster_id: 1,
      poster_nickname: "Pansy Stone",
      designated_stacks: ["React"],
      created_date: "2022-11-24",
      modified_date: "2022-11-24",
    },
    {
      post_id: 7,
      title: "need Angular study crew!",
      content: "tba",
      recruit_status: "RECRUIT",
      recruit_capacity: 4,
      contact_type: "KAKAO_OPEN_CHAT",
      contact: "p.stone@kakao.com",
      start_date: "2021-08-15",
      expected_term: 21,
      poster_id: 1,
      poster_nickname: "Pansy Stone",
      designated_stacks: ["Angular"],
      created_date: "2022-11-24",
      modified_date: "2022-11-24",
    },
    {
      post_id: 8,
      title: "need Vue study crew!",
      content: "tba",
      recruit_status: "RECRUIT",
      recruit_capacity: 4,
      contact_type: "KAKAO_OPEN_CHAT",
      contact: "p.stone@kakao.com",
      start_date: "2021-08-15",
      expected_term: 21,
      poster_id: 1,
      poster_nickname: "Pansy Stone",
      designated_stacks: ["Vue"],
      created_date: "2022-11-24",
      modified_date: "2022-11-24",
    },
    {
      post_id: 9,
      title: "need React,Vue study crew!",
      content: "tba",
      recruit_status: "RECRUIT",
      recruit_capacity: 4,
      contact_type: "KAKAO_OPEN_CHAT",
      contact: "p.stone@kakao.com",
      start_date: "2021-08-15",
      expected_term: 21,
      poster_id: 1,
      poster_nickname: "Pansy Stone",
      designated_stacks: ["React", "Vue"],
      created_date: "2022-11-24",
      modified_date: "2022-11-24",
    },
    {
      post_id: 10,
      title: "need Angular, Svelte study crew!",
      content: "tba",
      recruit_status: "RECRUIT",
      recruit_capacity: 4,
      contact_type: "KAKAO_OPEN_CHAT",
      contact: "p.stone@kakao.com",
      start_date: "2021-08-15",
      expected_term: 21,
      poster_id: 1,
      poster_nickname: "Pansy Stone",
      designated_stacks: ["Angular", "Svelte"],
      created_date: "2022-11-24",
      modified_date: "2022-11-24",
    },
  ],
};
