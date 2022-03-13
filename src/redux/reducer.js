const dataForLogin = {
    post:[{
        description: null,
        imageUrl:null,
    }],
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
        //    post:[ action.payload , ...state.post  ]
           post:state.post.concat(action.payload)
       }
       default : return state
   }
}

export default loginAction ; 