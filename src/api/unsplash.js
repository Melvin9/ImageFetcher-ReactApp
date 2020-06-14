import axios from 'axios';

const unsplash = async(term)=>{
    const result=await axios.get("https://api.unsplash.com/search/photos",{
    params: {
      query:term
    },
    headers:{
      Authorization: 'Client-ID 1JWONzwjZd-BStc8f_DOA3SoY6U8CgMXSXUGMHnEZxI'
    }
  });
  return result;
}

export default unsplash;