import React from 'react';
import './Form.css';

class loginContainer extends React.Component{
    constructor(){
    super();
     this.loginEmailPlaceholder = "Enter Email...";
     this.loginPasswordPlaceholder = 'Enter Password...';
    }

    render() {
        return(
            <div className={'authBox'}>
                <h1>{this.prerana}</h1>
                <div className={'leftBox'}>
                    <div className={'style1'}> Welcome to MDM </div>
                    <hr className={'line'}/>
                    <div className={'style2'}> <small> Lorem ipsum is simply dummy text of printing 
                        and typesetting industry. 
                        Lorem ipsum has been the industry's standard dummy text</small></div>
                    <div className={'btnAuth1'}> Know more </div>
                </div>
                
            <div className={'rightBox'}>
                <div className={'box'}>
                    <div className={'titleAuth'}> Signin </div>
                    <hr className={'line1'}/>
                    <div className={'inputBox1'}>
                        <input className={'inputS'} type={'email'} placeholder={this.loginEmailPlaceholder} />
                    </div>
                    <div className={'inputBox2'}>
                        <input className={'inputS'} type={'password'} placeholder={this.loginPasswordPlaceholder}/>
                    </div>
                    <div className={'btnAuth'}> Login </div>
                    <div className={'diamond'}></div>
                    <div className={'circle'}></div>
                </div>
            </div>
            </div>
        )
    }
}
export default loginContainer;