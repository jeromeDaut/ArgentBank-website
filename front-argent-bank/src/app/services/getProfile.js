import axios from "axios"


export const getProfile = (token) =>{
    try{
        axios.post('http://localhost:3001/api/v1/user/profile',
        {token},
        {headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    )
    .then(res =>{
        console.log(res.data.body);
    })
    .catch(err =>{
        const status = err.response.status;
        console.log(status)
        if(status===401){window.location.href="http://localhost:3000/signIn/"}
    })
    } catch(error){
        console.log(error);
    }
}