import { Link } from "react-router-dom";

export const LoginLabel: React.FC = () => {
    return (
      <div className="flex flex-col space-y-3">
        <h1 className="text-5xl font-semibold text-white w-[25vw]">Authorization Page</h1>
        <div className="flex text-left font-extralight">
          <h2 className="mr-2">Don't have an account?</h2>
          <Link to="/signup" className="underline italic">Sign Up</Link>
        </div>
      </div>
    );
  };
  
  export const SignUpLabel: React.FC = () => {
    return (
      <div className="flex flex-col space-y-3">
        <h1 className="text-5xl font-semibold text-white w-[25vw]">Create an account</h1>
        <div className="flex text-left font-extralight">
          <h2 className="mr-2">Already have an account?</h2>
          <Link to="/login" className="underline italic">Sign In</Link>
        </div>
      </div>
    );
  };