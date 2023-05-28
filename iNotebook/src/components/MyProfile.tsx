import { useEffect, useState } from 'react'
import { data } from '../helper/fetchInstance'
import { AxiosOptions } from '../helper/fetchInstance'


export default function MyProfile() {

    const userURL = 'http://localhost:8080/user';
    const url = 'https://dummyjson.com/products';

    const [payload, setPayload] = useState({
        name: "",
        email: "",
        password: "",
        cPassword: "",
        mNumber: 0
    });

    // Updated lifecycle hook
    useEffect(()=> {
        console.log("Payload", payload)
    }, [payload]);

    const clear = () => {
        setPayload({
            name: "",
            email: "",
            password: "",
            cPassword: "",
            mNumber: 0
        })
    }
    const save = () => {
        const axiosPayload: AxiosOptions = {
            url,
            method: "POST",
            payload
        }
        if(axiosPayload.method === "POST") axiosPayload.url = "http://localhost:8080/user"; 

        data(axiosPayload);
        console.log("data", payload);
    }


    return (
        <>
            <div className='max-w-4xl mx-auto border border-gray-200 rounded-md py-20 bg-gray-50'>
                <div className='max-w-xl mx-auto'>
                    <div className='grid'>
                        <div className='mb-5'>
                            <label htmlFor="email" className='text-gray-600'> Email</label>
                            <input type="text" value={payload.email} onChange={($event) => setPayload({...payload, email : $event.target.value})} className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id="email" />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name" className='text-gray-600'>Name</label>
                            <input type="text" value={payload.name} onChange={($event) => setPayload({...payload, name : $event.target.value})} className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='name' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name" className='text-gray-600'>Password</label>
                            <input type="text" value={payload.password} onChange={($event) => setPayload({...payload, password : $event.target.value})} className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='password' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name" className='text-gray-600'>Confirm Password</label>
                            <input type="text" value={payload.cPassword} onChange={($event) => setPayload({...payload, cPassword : $event.target.value})} className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='cPassword' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name" className='text-gray-600'>Mobile Number</label>
                            <input type="number" value={payload.mNumber} onChange={($event) => setPayload({...payload, mNumber : Number($event.target.value)})} className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='mNumber' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-5'>
                    <button className='px-8 py-2 hover:bg-blue-300 hover:text-white text-gray-100 bg-blue-500 rounded-full' onClick={clear}>Cancel</button>
                    <button className='px-8 py-2 hover:bg-green-300 hover:text-white text-gray-100 bg-green-500 rounded-full' onClick={save}>Save</button>
                </div>
            </div>
        </>
    )
}