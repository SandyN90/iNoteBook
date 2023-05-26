import axios from "axios";

const data = (url: string)=> {
axios.get(url).then((res)=> {
    console.log(res.data);
})
}
export default data;