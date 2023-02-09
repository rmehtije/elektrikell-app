import './App.scss';
import Container from 'react-bootstrap/Container';
import NavbarComponent from './NavBar';
import PriceHeader from './PriceHeader';
import FooterComponent from './Footer';

function App() {
  return (
    <>
      <div className="container-wrapper pb-2">
        <Container>
          <NavbarComponent />
          <PriceHeader />
          <div className="chart"></div>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
