import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import FlashElements from './components/Homepage/flashElement';
import PackageElement from './components/Homepage/packageElement';

function App() {
  return (
    <div>
      <Header />
      <FlashElements></FlashElements>
      <PackageElement></PackageElement>
      <Footer />
      
    </div>
  );
}

export default App;
