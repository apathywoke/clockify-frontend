import AuthPic from '../../shared/assets/images/AuthBackground.png'
import { RegisterForm } from '../../app/auth/index'
import { SignUpLabel } from '../../app/auth/index'

const SignUp = () => {
    return(
        <>
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
        </>
    )
}

export default SignUp;