const dataForLogin = {
    post:[],
    name:null,
    url:null,
    email:null
}

const loginAction = (state = dataForLogin  , action ) => {
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
           post: [ ...action?.payload]
        //    post: [ action.payload , ...state.post  ]
        //    post:state.post.concat(action.payload)
       }

       case "Delete" : return {
           ...state,
           post:state.post.filter(v => v.id !== action.payload)
       }
       default : return state
   }
}

export default loginAction ; 