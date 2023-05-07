import ListItem from './ListItem'
import { useGlobalContext } from '../context/context'

const ListContainer = () => {
  const { listItem, handleCompleted, showAll, showActive, clearCompleted } = useGlobalContext()
  return (
    <div className=' shadow-md bg-white rounded-md 
     w-[90%] md:w-[500px] mx-auto
     py-4
    translate-y-[-15px]
    dark:bg-darkTheme-veryDarkDesaturatedBlue
    '>
        <ul className='flex list flex-col gap-2'>
          {
            listItem.map(item => {
              const {desc, checked, id} = item;              
              return <ListItem key={id} desc={desc}  id={id} checked={checked} />
              
            })
          }
        </ul>
        <div className='flex p-4 justify-between items-center my-2'>
            <p className=' text-lightTheme-darkGrayishBlue text-sm'><span>{listItem.length}</span> item{listItem.length > 1 ? 's' : ''} left</p>
            <div className='hidden md:flex gap-2'>
            <button onClick={showAll} className=' outline-none text-lightTheme-lightGrayishBlue text-sm'>All</button>
            <button onClick={showActive} className=' outline-none text-lightTheme-lightGrayishBlue text-sm'>Active</button>
            <button onClick={handleCompleted} className=' outline-none text-lightTheme-lightGrayishBlue text-sm'>Completed</button>
            </div>
            <button onClick={clearCompleted} className=' text-lightTheme-darkGrayishBlue text-sm capitalize'>clear completed</button>
        </div>
    </div>
  )
}

export default ListContainer