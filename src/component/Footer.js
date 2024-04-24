import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io'
import { IoLocationSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";

function Footer() {
    return (
        <>
            <div>
                <div className='container'>
                    <div className='d-flex justify-content-between mt-5 contact_footer'>
                        <div>
                            <h4><b> Consulting Agency For Your Business</b></h4>
                            <p>the quick fox jumps over the lazy dog</p>
                        </div>
                        <div>
                            <button className='btn btn-primary'>Contact Us</button>
                        </div>
                    </div>
                </div>
                {/* Footer start */}
                <div class='footer_bg mt-3'>
                    <div class='container'>
                        <div class='d-flex justify-content-between pt-5 footer_menu'>
                            <div class='footer-column'>
                                <ul>
                                    <li className='h4'><a href="/">Company Info</a></li>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Carrier</a></li>
                                    <li><a href="/">We are hiring</a></li>
                                    <li><a href="/">Blog</a></li>
                                </ul>
                            </div>
                            <div class='footer-column'>
                                <ul>
                                    <li className='h4'><a href="/">Legal</a></li>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Carrier</a></li>
                                    <li><a href="/">We are hiring</a></li>
                                    <li><a href="/">Blog</a></li>
                                </ul>
                            </div>
                            <div class='footer-column'>
                                <ul>
                                    <li className='h4'><a href="/">Features</a></li>
                                    <li><a href="/">Business Marketing</a></li>
                                    <li><a href="/">User Analytic</a></li>
                                    <li><a href="/">Live Chat</a></li>
                                    <li><a href="/">Unlimited Support</a></li>
                                </ul>
                            </div>
                            <div class='footer-column'>
                                <ul>
                                    <li className='h4'><a href="/">Resources</a></li>
                                    <li><a href="/">IOS & Android</a></li>
                                    <li><a href="/">Watch a Demo</a></li>
                                    <li><a href="/">Customers</a></li>
                                    <li><a href="/">API</a></li>
                                </ul>
                            </div>
                            <div class='footer-column'>
                                <ul>
                                    <li className='h4'><a href="/">Get In Touch</a></li>
                                    <li><a href="/" class='footer_icon'><IoIosCall />(480) 555-0103</a></li>
                                    <li><a href="/" class='footer_icon'><IoLocationSharp />4517 Washington Ave.<br />Manchester, Kentucky 39495</a></li>
                                    <li><a href="/" class='footer_icon'><IoMailSharp />debra.holt@example.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className=' mt-3 pb-3 footer_social_bg'>
                        <div className='container d-flex justify-content-between footer_social_bg'>
                            <div>
                                Made With Love By Figmaland All Right Reserved
                            </div>
                            <div className='h4 d-flex gap-3 footer_social'>
                                <FaFacebook className='text-primary' />
                                <AiFillInstagram className='text-primary' />
                                <AiFillTwitterCircle className='text-primary' />
                            </div>
                        </div>
                    </div></div>

                {/* Footer End */}
            </div>
        </>
    )
}

export default Footer
