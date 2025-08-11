import React, { useRef } from 'react'
import Input from "../../assets/input/Input"
import './Sign.css'
import Button from '../../assets/button/Button'
import useSpotlight from '../../utilities/useSpotlight'

interface props {
    x: number,
    y: number
}

const Sign_Up: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { x, y }: props = useSpotlight(ref);

    return (
        <>
            <div
                id='parent'
                ref={ref}
                style={{
                    '--x': `${x}px`,
                    '--y': `${y}px`
                } as React.CSSProperties}
            >
                <header>
                    <h3>Sign Up</h3>
                    <span>Enter your credentials to create your account</span>
                </header>
                <div className='line'></div>
                <main>
                    <div className='butt-login'><Input label="Name" placeholder='Name' /></div>
                    <div className='butt-login'><Input label="E-mail" placeholder='name@example.com' /></div>
                    <div className='butt-login'><Input label="Password" type='password' /></div>
                    <div className='butt-login '>
                        <Button color='true' type='submit' width='22rem' work='Submit' />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Sign_Up;