import React from 'react';
import Input from './input'
function Form({onSubmit}) {
  return(
    <form className="sign-up-form" onSubmit={onSubmit}>
        <Input type="text" name="firstname" placeholder="Name"/>
        <Input type="text" name="lastname" placeholder='Your lastname'/>
        <Input type="email" name="email" placeholder='Your email'/>
        <Input type="password" name="Your password" placeholder='Your password'/>
        <button>Sign up</button>
    </form>
  );
}

export default Form;
