import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectPriceType from './SelectPriceType';
import { getCurrentPrice } from '../services/apiService';
import { setErrorMessage } from '../services/stateService';
import { useDispatch } from 'react-redux';


// Komponenty mogut prinemat' properties/property. 
// Properti peredajotsa komponentu takzhe kak i svojstva html elementu.
// Properties mogut byt' ljubym tipom dannyh
// Kazhdoe property peredannoe komponentu soberajetsa v odin object.
// Komponent prinemajet tol'ko odin argument i zachastuju jego nazqvajut 'props'.

function PriceHeader(props) {
    console.log('PriceHeader');
    const [currentPrice, setCurrentPrice] = useState(0);

    const dispatch = useDispatch();

    // useEffect - react hook kotoryj zapuskajetsa tol'ko posle togo kak ves' komponent zakonchil otrisovku.
    // useEffect v sebja dva argumenta
    // 1 Funkcija kotoraja zapustitsa kogda komponent zakonchil svoju otrisovku
    // 2 esto spisok zavisimostej, massiv. 
    // Spisok zavisimostej kontrolirujet zapusk funkcqii pervogo argumenta.
    // Jesli v zavisimosti izenilis' dannye to useEffect zanogo zapuskajetsa
    // Komponent mozhet zanogo otrisovatsa no useEffect ne zapustitsa, jesli eto izmenenije jego ne kasajetsa.
    // Jesli peredat' pustoj massive v zavisimosti to useEffect otrabotajet tol'ko odin raz posle pervoj otrisovki komponenta.
    // useEffect takzhe garantirujet chto jesli v njom my budem menjat' sostojanije komponenta to proizojdot tol'ko odna otrisovka 
    // komponenta i posle etoj otrisovki useEffect bol'she ne zapustitsa;
    
    useEffect(() => {
        getCurrentPrice()
            .then(({ success, data, messages }) => {
                if (!success) {
                    throw messages[0];
                }

                const kwPrice = +(data[0].price / 10 * 1.2).toFixed(2);
                setCurrentPrice(kwPrice);
            })
            .catch((error) => dispatch(setErrorMessage(error.toString())));
    }, [dispatch]);

    return (
        <>
            <Row className="mb-2">
                <Col>1 of 3</Col>
                <Col>
                    <SelectPriceType {...props} />
                </Col>
                <Col>{currentPrice}</Col>
            </Row>
        </>
    );
}

export default PriceHeader;
