import { useEffect, useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import NavBar from './Header/NavBar';
import PriceHeader from './Header/PriceHeader';
import FooterHighPrice from './Footer/FooterHighPrice';
import Body from './Body/Body';
import FooterLowPrice from './Footer/FooterLowPrice';
// import ErrorModal from './ErrorModal';
import Loading from './Loading';
import { useParams } from 'react-router-dom';

function ElektriKell() {
  const params = useParams();

  const [activePrice, setActivePrice] = useState('low');
  const [hourRange, setHourRange] = useState(1);
  const [lowPriceTimestamp, setLowPriceTimestamp] = useState(0);
  
  useEffect(() => {
    params.activePrice && setActivePrice(params.activePrice);
  }, [params]);

  return (
    <>
      <div className="container-wrapper pb-2">
        <Container className="text-center">
          <NavBar />
          <PriceHeader activePrice={activePrice} setActivePrice={setActivePrice} />
          <Body hourRange={hourRange} activePrice={activePrice} setLowPriceTimestamp={setLowPriceTimestamp} />
        </Container>
      </div>
      {activePrice === 'low' ?
        <FooterLowPrice
          hourRange={hourRange}
          setHourRange={setHourRange}
          lowPriceTimestamp={lowPriceTimestamp}
        />
        : <FooterHighPrice />}
      {!lowPriceTimestamp && <Loading />}
    </>
  );
}

export default ElektriKell;
