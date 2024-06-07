import Header from '../src/Components/Header/Header';
import Footer from '../src/Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
};

export default App;