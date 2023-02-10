
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const MyProfile = () => {
    const [post,Setpost ] = useState([]);
useEffect( ()=>{
    try {
         axios.get('http://localhost:4000/pages').then(data=>{
         Setpost(data)
         
        })
       }catch(error){
          console.log(error)
       }
},[])
 console.log('my data is ',post)
 return (<div>
     <blockquote>
     
     
     <p>{post.data.id} </p>
     <p>{post.data.title}</p>
       
     
     </blockquote>
    </div>)
}

export default MyProfile;