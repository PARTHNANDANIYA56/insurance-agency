import React from 'react'

function Home() {
    return (
        <>
            <div className='hader_mein'>
                <div className='container'>
                    <div className=' d-flex justify-content-between align-items-center'>
                        <div className='mt-3 brand_logo'>
                            <img src="logo.png" alt="" height={60} width={250} />
                        </div>
                        <div className='list_menu mt-3'>
                            <ul className='d-flex gap-5'>
                                <a href="/"><li>Home</li></a>
                                <a href="/"> <li>Product</li></a>
                                <a href="/"> <li>Pricing</li></a>
                                <a href="/"><li>Contact</li></a>
                            </ul>
                        </div>
                        <a href='/'>Login</a>
                        <div className='nav_btn mt-3 align-items-center'>
                            <button className='btn btn-primary'>Become a member</button>
                        </div>
                    </div>
                    {/* Banner contant start */}
                    <div className='maindiv'>
                        <div className='text-light w-50'>
                            <h1 className='display-2 fw-bolder'>
                                <strong>We Ensure A Best Insurance Service</strong>
                            </h1>
                            <span>We know how large objects will act,
                                but things on a small scale.
                            </span>
                            <div className=' mt-3 '>
                                <button className='banner-btn btn btn-primary '>Get Quote Now</button>
                                <button className='banner-btn  btn btn-outline-light' style={{ margin: '15px' }}>Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* Banner contant end */}
                </div>
            </div>
        </>
    )
}

export default Home
