import Hero from '../components/Hero';
import ListContainer from '../components/ListContainer';
import Bottom from '../components/Bottom';

const Home = () => {  
  return (
    <div  className="app bg-[rgba(0,0,0,.1)] h-full min-h-screen pb-4 dark:bg-darkTheme-veryDarkBlue">
        <Hero />
        <ListContainer />
        <Bottom />
    </div>
  )
}

export default Home