import React from 'react'
import UseEditor from '../../utilities/useEditor'
import Input from '../../assets/input/Input'
const Addpost = () => {
  return (
    <div>
      <div>
        
      </div>
      
      <div id='title'>
        <Input label="Title" placeholder='Title of the Content' style={{width:"69vw"}}/>
      </div>
      <div id='content'>
        <Input label='Content' custom_div={true}/>
        <UseEditor/>
      </div>
      <div>
        <Input label="Writer" placeholder='@User' style={{width:"69vw"}}/>
      </div>
    </div>
  )
}

export default Addpost