import { useState, useEffect } from 'react';
import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    ReferenceLine,
} from 'recharts';
import { getPriceData } from '../services/apiService';
import moment from 'moment';
import AreaLow from './AreaLow';
import AreaHigh from './AreaHigh';
import Button from 'react-bootstrap/Button';
import DateForm from './DateForm';
import { setErrorMessage } from '../services/stateService';
import { useDispatch } from 'react-redux';

const pastHours = 10;
const start = moment().subtract(pastHours, 'hours').format();
const end = moment().add(30, 'hours').format();

function Body({ activePrice }) {
    console.log('Body');
    const [data, setData] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [searchDate, setSearchDate] = useState({
        start, end, pastHours
    });

    const dispatch = useDispatch();

    useEffect(() => {

        getPriceData(searchDate)
            .then(({ success, data, messages }) => {
                console.log('success', success);
                if (!success) {
                    throw messages[0];
                }

                const newData = data.ee.map(d => {
                    return {
                        ...d,
                        price: +(d.price / 10 * 1.2).toFixed(2),
                        hour: moment.unix(d.timestamp).hours(),
                        current: moment().isSame(moment.unix(d.timestamp), 'hour'),
                    }
                });

                setData(newData);
                console.log('getPriceData');
            })
            .catch((error) => dispatch(setErrorMessage(error.toString())));
    }, [searchDate, dispatch]);

    const chartsChildren = (
        <>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <ReferenceLine x={data?.findIndex((el) => el.current)} stroke="red" />
        </>
    );

    return (
        <>
            {activePrice === 'high' ?
                <AreaHigh data={data}>
                    {chartsChildren}
                </AreaHigh>
                :
                <AreaLow {...{ data, searchDate }} >
                    {chartsChildren}
                </AreaLow>
            }
            <Button variant="outline-secondary" onClick={() => setShowForm(true)} size="sm">
                Määra kuupäevad
            </Button>
            <DateForm show={showForm} setShow={setShowForm} setSearchDate={setSearchDate} />
        </>
    );
}

export default Body;
