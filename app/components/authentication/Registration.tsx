"use client";
import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import CustomListBox from '../common/CustomListBox';
import { isValidateEmail } from '@/utils';

const Registration = () => {

    const userTypes = [
        { id: 0, type: 'Choose user type' },
        { id: 1, type: 'Customer' },
        { id: 2, type: 'Merchant' }
    ]

    const [selectedUserType, setSelectedUserType] = useState(userTypes[0]);
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');

    const signUp = () => {

        isEmpty();

        const isValidEmail = isValidateEmail(email);
        if(!isValidEmail) {
            alert('Please provide valid email');
            return;
        }

        if(password !== confirmedPassword){
            alert('Password and confirmed password do not match.');
            return;
        }
       
    }

 
    const isEmpty = () => {
        var elements = document.getElementsByTagName("input")
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].value == "") {
                alert('Please provide ' + elements[i].id);
                return;
            }
        }
    }



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
                    <input type="text" id="name" className="logintext__input" />
                    <div className='registration__input'>
                        <text>Email</text>
                    </div>
                    <input type="text" id="email" className="logintext__input" onChange={(e) => setEmail(e.target.value)}/>
                    <div className='registration__input'>
                        <text>Password</text>
                    </div>
                    <input type="password" id="password" className="logintext__input" onChange={(e) => setPassword(e.target.value)}/>
                    <div className='registration__input'>
                        <text>Confirm Password</text>
                    </div>
                    <input type="password" id="confirmed password" className="logintext__input" onChange={(e) => setConfirmedPassword(e.target.value)}/>
                    <div className='registration__input pb-1'>
                        <text>Register as</text>
                    </div>
                    <CustomListBox></CustomListBox>
                    <button type="button" className="authentication-btn mt-10" onClick={signUp}>Sign Up</button>
                </form>
            </div>
        </main>
    )
}

export default Registration