import React, { useState, useEffect, useRef } from 'react'
import UseEditor from '../../utilities/useEditor'
import Input from '../../assets/input/Input'
import { useDispatch, useSelector } from 'react-redux'
import Popup from '../../assets/error pop-up/popup'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../assets/button/Button'
import './Addpost.css'
import useSpotlight from '../../utilities/useSpotlight'
import AuthServices from '../../Services/auth'
import { useForm, Controller  } from 'react-hook-form'
import {Logout } from '../../Redux/slices/Log_status'

interface Position {
  x: number,
  y: number
}
const Addpost = () => {
  const status = useSelector((state: any) => state.status.status);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [Error, setError] = useState(false)
  const [ErrorData, setErrorData] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const ref = useRef(null)
  const { x, y }: Position = useSpotlight(ref)
  const { register, handleSubmit, control } = useForm();

  const Triggerd_Logout = async () => {
    try {
      await AuthServices.Logout()
      dispatch(Logout())
      setError(true)
    } catch (error) {
      console.log(error);

    }
  }
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev)
  }
  useEffect(() => {
  }, [status])

  const navigation = () => {
    navigate('/Addpost')
  }

  const Post_Post = (data) => {
    console.log(data);

  }
  return (
    <div id='main_addpost'>
      {Error && (
        <div id='error_appear_zone'>
          <Popup prop={ErrorData} onClose={() => {
            setError(false)
            setErrorData(null)
          }} />
        </div>
      )}
      {status ? (
        <>
          <div id="navbar_addpost">
            <div className='logo'>
              <Link to={'/'}>
                <svg className='hidden' id="Layer_2_Default" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 595.28 841.89" width="100" height="100">
                  <polygon fill="#fff" points="324.05 142.8 531.27 263 324.05 392.59 324.05 142.8" />
                  <polygon fill="#fff" points="325.77 501.99 534.4 625.48 325.77 745.22 325.77 501.99" />
                  <polygon fill="#fff" points="271.46 153.75 70.5 273.95 271.46 396.03 271.46 153.75" />
                  <polygon fill="#fff" points="271.46 501.21 70.5 625.8 271.46 741.85 271.46 501.21" />
                  <polygon fill="#fff" points="258.16 448.78 50.62 322.47 50.62 577.9 258.16 448.78" />
                </svg>
              </Link>
              {status && (
                <div id='dropdown' onClick={handleDropdownToggle} style={{ position: 'relative' }}>
                  <svg id='menu_icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                  {isDropdownOpen && (
                    <div id="dropdownMenu">
                      <Button type="button" work="Add Post" width="100%" bgcolor="ff6200" onClick={navigation} />
                      <Button type="button" work="All Post" width="100%" bgcolor="ff6200" />
                      <Button type="button" work="Logout" width="100%" bgcolor="ff6200" onClick={Triggerd_Logout} />
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>

          <div id='post'>


            <form onSubmit={handleSubmit(Post_Post)}>
              <div id='title'>
                <Input label="Title" placeholder='Title of the Content' style={{ width: "69vw" }} {...register('title', { required: true })} />
              </div>
              <div id='content'>
                <Input label='Content' custom_div={true} />
                <Controller
                  name="content"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <UseEditor value={field.value} onChange={field.onChange} />
                  )}
                />
              </div>
              <div>
                <Input label="Writer" placeholder='@User' style={{ width: "69vw" }} {...register('writer', { required: true })} />
              </div>
              <div id="submit">
                <Button color='true' type='submit' width='22rem' work='Submit' />
              </div>
            </form>


          </div>
        </>
      ) : (
        <div id='login-not-found' ref={ref} style={{ '--x': `${x}px`, '--y': `${y}px` } as React.CSSProperties}>

          <div id="login-not-found-msg">
            <div id="addpost_login_visible">
              <h2>Logout.</h2>
              <h3 className='h3'>
                Please Login or SignUp to access the Editor
              </h3>
            </div>
          </div>
          <div className="add_post_buttons">
            <Link to={'/login'}>
              <Button type="button" width="20vw" work="Login" bgcolor="ff6200" />
            </Link>
            <Link to={'/signup'}>
              <Button type="button" width="20vw" work="Sign Up" bgcolor="ff6200" />
            </Link>
          </div>
          <Link className='h3' style={{textDecoration:"none", marginTop:"20px"}} to={'/'}>
          Home
          </Link>
        </div>
      )}
    </div>
  )
}

export default Addpost