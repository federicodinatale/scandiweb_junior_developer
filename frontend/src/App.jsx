import './App.css';

import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
