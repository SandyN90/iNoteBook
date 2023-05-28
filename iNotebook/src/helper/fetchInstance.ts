import axios from "axios";

type Payload = {
    name: string;
    email: string;
    password: string;
    cPassword: string;
    mNumber: number;
}

type Method = "POST" | "GET";
interface AxiosOptions {
    url: string;
    payload: Payload;
    method: Method;
}

const data = (options: AxiosOptions) => {
    if (options.method === "GET") {
        axios.get(options.url).then((res) => {
            console.log("datasljaskldf", res.data);
        })
    }else {
        axios.post(options.url, options.payload)
        .then((data)=> console.log("Successfully saved", data))
        .catch((err)=> console.log(err));
    }
}
export { data };
export type { AxiosOptions, Method, Payload };