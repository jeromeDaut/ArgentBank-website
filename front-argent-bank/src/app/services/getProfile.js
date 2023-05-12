import axios from "axios"


export const getProfile = (token) =>{
    try{
       return axios.post('http://localhost:3001/api/v1/user/profile',
        {token},
        {headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    )
    .then(res=>{
        console.log(res.data.body.userName);
        return({
          userName: res.data.body.userName,
          lastName: res.data.body.lastName,
          firstName: res.data.body.firstName,
          token: token,
        });
    })
    .catch(err =>{
        const status = err.response.status;
        console.log(status)
        if(status===401){window.location.href="http://localhost:3000/login/"}
    })
    } catch(error){
        console.log(error);
    }
}