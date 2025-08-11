import React, { useRef } from 'react'
import Input from "../../assets/input/Input"
import './Login.css'
import Button from '../../assets/button/Button'
import useSpotlight from '../../utilities/useSpotlight'
import AuthServices from '../../Services/auth'

interface Position {
    x: number,
    y: number
}

const Login: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { x, y }: Position = useSpotlight(ref);
    console.log(x, y);

    return (
        <>
            <div
                id='login-form'
                ref={ref}
                style={{
                    '--x': `${x}px`,
                    '--y': `${y}px`
                } as React.CSSProperties}
            >
                <header>
                    <h3>Login</h3>
                    <span>Enter your credentials to access your account</span>
                </header>
                <div className='form-divider'></div>
                <main>
                    <div className='form-group'>
                        <Input label="E-mail" placeholder='name@example.com' />
                    </div>
                    <div className='form-group'>
                        <Input label="Password" type='password' />
                    </div>
                    <div className='form-group'>
                        <Button color='true' type='submit' width='22rem' work='Submit' />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Login;   