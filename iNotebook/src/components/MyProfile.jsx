import react from 'react'

export default function MyProfile() {
    return (
        <>
            <div className='max-w-4xl mx-auto border border-gray-200 rounded-md py-20 bg-gray-50'>
                <div className='max-w-xl mx-auto'>
                    <div className='grid'>
                        <div className='mb-5'>
                            <label htmlFor="email" className='text-gray-600'> Email</label>
                            <input type="text" className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id="email" />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name"className='text-gray-600'>Name</label>
                            <input type="text" className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='name' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name"className='text-gray-600'>Password</label>
                            <input type="text" className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='name' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name"className='text-gray-600'>Confirm Password</label>
                            <input type="text" className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='name' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name"className='text-gray-600'>Mobile Number</label>
                            <input type="number" className='border border-gray-200 w-full rounded-md p-1 focus:outline-none' id='name' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}