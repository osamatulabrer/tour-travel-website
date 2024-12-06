import Layout from "./assets/pages/Layout"
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
   <Layout/>
  )
}

export default App
