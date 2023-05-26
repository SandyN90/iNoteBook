import { react, useEffect, useState } from 'react'
import data from './../helper/fetchInstance'
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

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [mNumber, setMNumber] = useState();
    const ChangeHandler = ($event) => {
        switch ($event.target.id) {
            case 'email':
                setEmail($event.target.value);;
        }

    }
    useEffect(() => {
        console.log("useEffect", email, name, mNumber, password, cPassword);
    }, [email, name, mNumber, password, cPassword])
    data(url);

    const clear = ()=> {
        setCPassword("");
        setPassword("");
        setName("");
        setMNumber("");
        setEmail("");
    }
    const save = ()=> {
        setPayload({name:name,
        email: email,
        password: password,
        cPassword: cPassword,
        mNumber: mNumber
    })
    console.log("data", payload);
    
        // const validated = validateInput();
        // const axiosOptions = {
        //     url: url,
        //     method: "POST",
        //     headers: { 'content-type': 'aplication/json' },
        //     data: payload
        // }
        // if(validated) data();
    }


    return (
        <>
            <div className='max-w-4xl mx-auto border border-gray-200 rounded-md py-20 bg-gray-50'>
                <div className='max-w-xl mx-auto'>
                    <div className='grid'>
                        <div className='mb-5'>
                            <label htmlFor="email" className='text-gray-600'> Email</label>
                            <input type="text" value={email} onChange={($event) => setEmail($event.target.value)} className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id="email" />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name" className='text-gray-600'>Name</label>
                            <input type="text" value={name} onChange={($event) => setName($event.target.value)} className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='name' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name" className='text-gray-600'>Password</label>
                            <input type="text" value={password} onChange={($event) => setPassword($event.target.value)} className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='password' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name" className='text-gray-600'>Confirm Password</label>
                            <input type="text" value={cPassword} onChange={($event) => setCPassword($event.target.value)} className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='cPassword' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name" className='text-gray-600'>Mobile Number</label>
                            <input type="number" value={mNumber} onChange={($event) => setMNumber($event.target.value)} className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='mNumber' />
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