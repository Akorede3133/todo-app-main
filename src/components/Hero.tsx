import { SetStateAction, useEffect } from 'react';
import moon from '../assets/icon-moon.svg';
import sun from '../assets/icon-sun.svg';
import { useGlobalContext } from '../context/context';
const Hero = () => {
  const {imgUrl, handleSignOut, addToList, setText, text, darkMode, setDarkMode} = useGlobalContext()
  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setText(e.target.value);
  }
  useEffect(() => {
    const doc = document.documentElement;
    darkMode ? doc.classList.add('dark') : doc.classList.remove('dark')
    console.log(doc);
    
    
  }, [darkMode])
  const handleDarkMode = ()=> {
    setDarkMode(prev => !prev);
  }
  return (
    <div className="bg-[url('assets/bg-mobile-light.jpg')]
    dark:bg-[url('assets/bg-mobile-dark.jpg')]
    md:bg-[url('assets/bg-desktop-light.jpg')]
    dark:md:bg-[url('assets/bg-desktop-dark.jpg')]
     bg-no-repeat
     bg-center
     bg-cover
    h-[230px] w-full">
        <div className='w-[90%] md:w-[500px] pt-4  mx-auto'>
          <div className='flex justify-between items-center'>
          <div className='w-[50px] h-[50px] bg-black rounded-full overflow-hidden'>
            <img className='' src={imgUrl ? imgUrl : 'https://ionicframework.com/docs/img/demos/avatar.svg'} alt="" />
          </div>
          <button onClick={handleSignOut} className=' dark:bg-darkTheme-veryDarkDesaturatedBlue bg-white p-2 rounded-md'>Log Out</button>
          </div>
        
            <div className='flex justify-between items-center py-4'>
                <h2 className='text-white font-medium text-2xl'>TO DO</h2>
                <img onClick={handleDarkMode} src={darkMode ? sun : moon} alt="" className=' cursor-pointer w-[20px]' />
            </div>
            <form action="" onSubmit={addToList} className='bg-white mt-4 rounded-md  dark:bg-darkTheme-veryDarkDesaturatedBlue flex p-3 items-center gap-4'>
                <div className='w-[20px] h-[20px] border border-lightTheme-lightGrayishBlue rounded-full'>
                </div>
                <input onChange={handleChange} value={text}  type="text" name="" id="" placeholder='Create a new todo...' className='w-full outline-none dark:bg-darkTheme-veryDarkDesaturatedBlue' />
            </form>
        </div>
        
    </div>
  )
}

export default Hero