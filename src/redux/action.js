const LoginInfo = (value) => {
  return {
    type: "LOGIN",
    payload: value,
  };
};

const LogOut = () => {
  return {
    type:"LOGOUT"
  }
}

const PostData = (value) => {
  console.log(value)
  return {
    type: "POST",
    payload:value
  }
}

export {LoginInfo , PostData ,  LogOut};
