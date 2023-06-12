import axios from "axios";

const getData = async() => {
    const response = await axios.get("http://localhost:3000/api/hello");
    
    return  response.data;
}
export default getData;