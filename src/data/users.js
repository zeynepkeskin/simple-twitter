export function login() {
  return "psuedo token";
}

export function signUp() {
  return getProfileData();
}

export function getProfileData() {
  return {
    username: "zeynep",
    fullname: "Zeynep Keskin",
    avatar: "/img/zeynep.jpg",
  };
}
