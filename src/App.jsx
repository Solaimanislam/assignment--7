
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Title from './Components/Title/Title'

function App() {
  

  return (
    <>
      
      <Header></Header>
      <Title></Title>
      <div className=' container mx-auto md:flex gap-6  lg:mt-10'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App
