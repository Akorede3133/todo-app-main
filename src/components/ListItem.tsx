import { useEffect } from 'react'
import close from '../assets/icon-cross.svg';
import { listProps } from '../context/context';
import { useGlobalContext } from '../context/context';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const ListItem = ({ desc, checked, id }: listProps) => {
  const {listItem, currentUser} = useGlobalContext()
  const handleCheck = async () => {
    const newList = listItem.map(item => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    })
    const listRef = doc(db, 'list', currentUser.uid)
    await updateDoc(listRef, {
      list: newList
    })
  }
  const handleDelete = async () => {
    const newList = listItem.filter(item =>  item.id !== id)
    const listRef = doc(db, 'list', currentUser.uid)
    await updateDoc(listRef, {
      list: newList
    })
  }
  const handleDragStart = (e: any) => {
    e.target.classList.add('dragging');
  }
  const handleDragEnd = (e: any) => {
    e.target.classList.remove('dragging');
  }
  const handleDragOver = (e: any, list: Element) => {
    e.preventDefault();
    const draggedItem = document.querySelector('.dragging') as Node
    const otherItems = [...document.querySelectorAll('li:not(.dragging)')];
    const nextSibling = otherItems.find(sibling => {      
      return e.clientY <= sibling.getBoundingClientRect().top  + sibling.getBoundingClientRect().height / 2;
    })
    list.insertBefore(draggedItem, nextSibling as Node)    
  }
  useEffect(() => {
    const listContainer = document.querySelector('.list');
    const items = document.querySelectorAll('.item')
    items.forEach(item => {
      item.addEventListener('dragstart', handleDragStart)
      item.addEventListener('dragend', handleDragEnd)
    })
    listContainer?.addEventListener('dragover', (e)=>handleDragOver(e, listContainer))    
    return (() => {
      items.forEach(item => {
        item.removeEventListener('dragstart', handleDragStart)
        item.removeEventListener('dragover', handleDragEnd)
      })
      listContainer?.removeEventListener('dragover', (e)=>handleDragOver(e, listContainer))
    })
  }, [])

  
  return (
    <li draggable='true' className=' text-sm px-4 cursor-pointer flex item justify-between gap-4 border-b dark:border-b-darkTheme-DarkGrayishBlue py-4'>
        <div className='flex gap-4 items-center'>
            <input type="checkbox" id={id} onChange={handleCheck} checked={checked} name="" className=' appearance-none 
            w-[25px] h-[25px]
            cursor-pointer
            border
            dark:border-darkTheme-DarkGrayishBlue
            relative
            border-lightTheme-lightGrayishBlue
            before:absolute
            before:top-[35%]
            before:left-[25%]
            before:w-full
            before:h-full
            checked:bg-gradient-to-t from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]
            flex
            justify-center
            items-center
            before:hidden
            checked:before:block
            before:bg-[url("assets/icon-check.svg")]
            before:bg-no-repeat
            rounded-full' />
            <p className={`${checked && 'line-through text-gray-500'} cursor-pointer`}>{desc}</p>
        </div>
        <div onClick={handleDelete} className='w-[15px] flex items-center justify-center cursor-pointer'>
            <img src={close} alt="" className='w-full object-cover'/>
        </div>
</li>
  )
}

export default ListItem