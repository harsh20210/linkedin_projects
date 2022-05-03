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
  return {
    type: "POST",
    payload:value
  }
}

 const deletePost = (id) => { 
  return {
    type:"Delete",
    payload:id,
  }
 }

export {LoginInfo , PostData ,  LogOut , deletePost};
