import axios from "axios";

export function fetchUser() {
  return new Promise(resolve => setTimeout(() => resolve(), 500));
}
export function loginUser(logindata) {
  return axios({
    url: "http://3.39.32.185:8080/api/login",
    method: "post",
    data: logindata,
    withCredentials: true,
  });
}

export function signupUser(signUpData) {
  const formData = new FormData();
  formData.append(
    "request",
    new Blob([JSON.stringify(signUpData)], { type: "application/json" })
  );
  return axios({
    url: "http://3.39.32.185:8080/api/member/join",
    method: "post",
    data: formData,
  });
}

export function checkIdEmail(data) {
  return axios({
    url: "http://3.39.32.185:8080/api/member/validate",
    method: "get",
    params: data,
  });
}
export function searchUser(memberId) {
  const member_id = Number(memberId);
  return axios({
    url: "http://3.39.32.185:8080/api/member/search",
    method: "get",
    params: { member_id },
  });
}
export function updateUser(formData) {
  return axios({
    url: "http://3.39.32.185:8080/api/member/update",
    method: "patch",
    data: formData,
  });
}
export function logoutUser() {
  return new Promise(resolve => setTimeout(() => resolve(), 500));
}
