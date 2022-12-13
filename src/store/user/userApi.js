import axios from "axios";

export function fetchUser() {
  return new Promise(resolve => setTimeout(() => resolve(), 500));
}
export function loginUser(data) {
  return axios.post("주소입력", data).then(res => {
    const token = res.data.token;
    const userInfo = res.data.user;
    return { token: token, userInfo: userInfo };
  });
}

export function signupUser(data) {
  return axios.post("http://3.39.32.185:8080/api/user/join", data).then(res => {
    console.log("회원가입 완료");
    console.log(res.response_message);
  });
}

export function checkIdEmail(data) {
  return axios
    .post("http://3.39.32.185:8080/api/user/validate", data)
    .then(res => {
      console.log("중복확인 완료");
      console.log(res.response_message);
    });
}
export function logoutUser() {
  return new Promise(resolve => setTimeout(() => resolve(), 500));
}
