import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectPriceType from './SelectPriceType';
import { getCurrentPrice } from '../services/apiService';
import { setErrorMessage } from '../services/stateService';
import { useDispatch } from 'react-redux';

function PriceHeader(props) {
    console.log('PriceHeader');
    const [currentPrice, setCurrentPrice] = useState(0);

    const dispatch = useDispatch();

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
