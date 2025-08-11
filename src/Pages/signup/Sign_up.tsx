import React, { useRef } from 'react'
import Input from "../../assets/input/Input"
import './Sign.css'
import Button from '../../assets/button/Button'
import useSpotlight from '../../utilities/useSpotlight'
import AuthServices from '../../Services/auth'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Login } from '../../Redux/slices/Log_status'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


interface props {
    x: number,
    y: number
}


const Sign_Up: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch()
    const { x, y }: props = useSpotlight(ref);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()

    const Create = async (data) => {
        const session = await AuthServices.Sign_Up(data);
        if (session) {
            const userdata = await AuthServices.Current_User(data);
            dispatch(Login(userdata))
            navigate('/')
        }
        else {
            console.log('creation_error')
        }
    }
    return (
        <>
            <div
                id='parent'
                ref={ref}
                style={{
                    '--x': `${x}px`,
                    '--y': `${y}px`
                } as React.CSSProperties}>
                <header>
                    <h3>Sign Up</h3>
                    <span>Enter your credentials to create your account</span>
                </header>
                <div className='line'></div>
                <main>
                    <form onSubmit={handleSubmit(Create)}>
                        <div className='butt-login'>
                            <Input label="Name" placeholder='Name' {...register('name', { required: true })} />
                        </div>
                        <div className='butt-login'>
                            <Input label="E-mail" placeholder='name@example.com'  {...register('email', { required: true })} />
                        </div>
                        <div className='butt-login'>
                            <Input label="Password" type='password' {...register('password', { required: true })} />
                        </div>
                        <div className='butt-login '>
                            <Button color='true' type='submit' width='22rem' work='Submit' />
                        </div>
                    </form>
                    <footer className='foot_sign_up'>
                        Have Account? <Link id='Login_signup' to={'/login'}>Log-In</Link> 
                    </footer>
                </main>

            </div>
        </>
    );
};

export default Sign_Up;