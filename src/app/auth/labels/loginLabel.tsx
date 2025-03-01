import { Link } from "react-router-dom";

export const LoginLabel: React.FC = () => {
    return (
      <div className="flex flex-col space-y-3 items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white w-[30vw]">Authorization Page</h1>
        <div className="flex text-left font-extralight">
          <h2 className="mr-2">Don't have an account?</h2>
          <Link to="/sign-up" className="underline italic">Sign Up</Link>
        </div>
      </div>
    );
  };
  
  export const SignUpLabel: React.FC = () => {
    return (
      <div className="flex flex-col space-y-3 items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white w-[30vw]">Create an account</h1>
        <div className="flex text-left font-extralight">
          <h2 className="mr-2">Already have an account?</h2>
          <Link to="/log-in" className="underline italic">Sign In</Link>
        </div>
      </div>
    );
  };