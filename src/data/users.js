export function login(data) {
  const url = "http://localhost:3005/api/users/login";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      // Handle the response data
      console.log(responseData);
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error("Error:", error);
    });
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
