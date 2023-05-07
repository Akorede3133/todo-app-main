import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/context';
const Login = () => {
  const {signIn} = useGlobalContext();
  return (
    <div className="h-screen dark:bg-darkTheme-veryDarkBlue bg-lightTheme-lightGrayishBlue grid items-center">
      <div className="dark:bg-darkTheme-veryDarkDesaturatedBlue bg-white p-4 h-[300px] w-[70%] mx-auto rounded-md flex flex-col items-center justify-center gap-4">
        <h2 className=" text-center text-3xl">Login / Register</h2>
        <button onClick={signIn} className=" shadow-md mt-10 bg-primary-bright-blue p-4 text-black rounded-md capitalize ">Login with Goggle</button>
      </div>
    </div>
  )
}

export default Login