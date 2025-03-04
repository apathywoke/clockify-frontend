import AuthPic from '../../shared/assets/images/AuthBackground.png'
import { RegisterForm } from '../../app/auth/index'
import { SignUpLabel } from '../../app/auth/index'
import { Helmet } from 'react-helmet';

const SignUp = () => {
    return(
        <body>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className="h-screen flex">
                {/* 60% Picture Space */}
                <div
                    className="w-[60%] bg-cover bg-center h-full"
                    style={{ backgroundImage: `url(${AuthPic})` }}>
                </div>

                {/* Right Side Content */}
            <div className="flex-1 flex flex-col justify-center items-center">
                <SignUpLabel />
                <RegisterForm />
            </div>
            </div>
        </body>
            
    )
}

export default SignUp;