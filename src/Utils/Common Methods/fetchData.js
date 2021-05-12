import axios from 'axios';

const getData = async (url)=>{
    let data = await axios.get(url)
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        return err
    })
    return data
}

export default getData;