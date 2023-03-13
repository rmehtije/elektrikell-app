import { useState, useEffect } from 'react';
import { ReferenceArea, ResponsiveContainer, LineChart } from 'recharts';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { rangePricesGenerator } from '../helpers/rangePrices';
import { setLowPriceTimestamp } from  '../services/stateService';

function AreaLow({ data, searchDate, children }) {
    const { durationParam } = useParams();

    const [x, setX] = useState(0);

    const hourRange = useSelector((state) => state.hourRange);

    const dispatch = useDispatch();

    const selectedTime = durationParam ? +durationParam : hourRange;

    useEffect(() => {
        if (data) {
            const rangePrices = rangePricesGenerator(data, selectedTime);
            setX(rangePrices[0].i);
            dispatch(setLowPriceTimestamp(rangePrices[0].timestamp));
        }
    }, [data, selectedTime, dispatch]);

    return (
        <ResponsiveContainer width="100%" height={400} >
            <LineChart data={data}>
                {children}
                <ReferenceArea
                    x1={x + searchDate.pastHours}
                    x2={x + selectedTime + searchDate.pastHours}
                    stroke="green"
                    fill="green"
                    strokeOpacity={0.3}
                    fillOpacity={0.3}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default AreaLow;
