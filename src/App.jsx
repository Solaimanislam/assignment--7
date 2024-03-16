
import './App.css'
import Banner from './Components/Banner/Banner'
import Blogs from './Components/Blogs/Blogs'

import Header from './Components/Header/Header'
import Title from './Components/Title/Title'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>

      <Header></Header>
      <Banner></Banner>
      <Title></Title>

      <Blogs></Blogs>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>
  )
}

export default App
