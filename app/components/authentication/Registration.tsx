"use client";
import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import CustomListBox from '../CustomListBox';

const Registration = () => {

    const userTypes = [
        { id: 0, type: 'Choose user type' },
        { id: 1, type: 'Customer' },
        { id: 2, type: 'Merchant' }
    ]

    const [selectedUserType, setSelectedUserType] = useState(userTypes[0])
    return (
        <main>
            <div className="mt-20">
                <h1 className="text-4x1 font-extrabold text-center">Welcome to IV Voucher
                </h1>
            </div>
            <div className='wrapper mt-5'>
                <form action="/" method="post">
                    <div className='registration__input'>
                        <text>Name</text>
                    </div>
                    <input type="text" className="logintext__input" />
                    <div className='registration__input'>
                        <text>Email</text>
                    </div>
                    <input type="text" className="logintext__input" />
                    <div className='registration__input'>
                        <text>Password</text>
                    </div>
                    <input type="password" className="logintext__input" />
                    <div className='registration__input'>
                        <text>Confirm Password</text>
                    </div>
                    <input type="password" className="logintext__input" />
                    <div className='registration__input pb-1'>
                        <text>Register as</text>
                    </div>
                   <CustomListBox></CustomListBox>
                    <button type="button" className="authentication-btn mt-10">Sign Up</button>
                </form>
            </div>
        </main>
    )
}

export default Registration