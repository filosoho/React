import React from 'react';
import {Link} from 'react-router-dom';

export default function Contact() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="../src/assets/img/email.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Contact Us</h1>
        </div>
    );
}