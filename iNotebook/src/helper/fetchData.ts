import axiosInstance from "./fetchInstance";

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
    payload?: Payload;
    method: Method;
}

const data = (options: AxiosOptions) => {
    if (options.method === "GET") {
        axiosInstance.get(options.url).then((res) => {
            console.log("datasljaskldf", res.data);
            return res.data;
        }).catch((error) => console.error(error));
    } else {
        console.log(options.url);
        axiosInstance.post(options.url, options.payload)
            .then((data) => {
                console.log("Successfully saved", data)
                return data;
            })
            .catch((err) => console.log(err));
    } return null;
}
export { data };
export type { AxiosOptions, Method, Payload };