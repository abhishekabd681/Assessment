import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Header from './Component/Header/Header';
import Product from './Component/Product/Product';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div>
       <Navigation />
       <Header />
       <Product />
       <Footer />
    </div>
  );
}

export default App;
