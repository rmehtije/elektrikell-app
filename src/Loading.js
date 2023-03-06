import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

function Loading() {

    const lowPriceTimestamp = useSelector((state) => state.lowPriceTimestamp);

    if(lowPriceTimestamp) return null;

    return (
        <div className="position-fixed w-100 h-100 top-0 d-flex bg-white align-items-center justify-content-center" style={{zIndex: 2}}>
            <Spinner animation="border" variant="primary" /><div className="fs-4 px-2">Elektrikell</div>
        </div>
    );
}

export default Loading;
