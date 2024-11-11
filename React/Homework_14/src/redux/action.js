export function setUserInfo(name, status) {
  return {
    type: "SET_USER_INFO",
    payload: {
      name: name,
      status: status,
    },
  };
}
