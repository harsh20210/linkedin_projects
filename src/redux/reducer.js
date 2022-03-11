const dataForLogin = {
    post:[],
    name:null,
    url:null,
    email:null
}

const loginAction = (state = dataForLogin  , action ) => {
    console.log(action.payload)
   switch(action.type){
       case "LOGIN" : return {
           post:[],
           name:action.payload.name,
           url:action.payload.url,
           email:action.payload.email
       }
       
       case "LOGOUT" : return {
           name:"",
           url:"",
           email:"",
           post:[]
       }

       case "POST" : return {
           ...state , 
        //    post:[ ...state.post , action.payload ]
           post:state.post.concat(action.payload)
       }
       default : return state
   }
}

export default loginAction ; 