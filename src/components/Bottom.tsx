import { useGlobalContext } from '../context/context'
const Bottom = () => {
  const { handleCompleted, showAll, showActive} = useGlobalContext()
  return (
    <div>
        <div className='w-[90%] md:w-[500px] 
      mx-auto shadow-md flex justify-center 
      gap-4 p-4
      rounded-md
      md:rounded-none
      md:bg-inherit
      cursor-pointer
      mt-[20px]
      md:hidden
      dark:bg-darkTheme-veryDarkDesaturatedBlue
      bg-white'
    >
      <button onClick={showAll} className=' text-lightTheme-lightGrayishBlue hover:text-primary-bright-blue text-sm'>All</button>
      <button onClick={showActive} className=' text-lightTheme-lightGrayishBlue text-sm hover:text-primary-bright-blue'>Active</button>
      <button onClick={handleCompleted} className=' text-lightTheme-lightGrayishBlue text-sm hover:text-primary-bright-blue'>Completed</button>
    </div>
    <p className=' text-lightTheme-darkGrayishBlue text-xs mt-12 text-center'>Drag and drop to reorder list</p>
    </div>
  )
}

export default Bottom