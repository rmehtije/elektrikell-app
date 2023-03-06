import { useState, useEffect } from "react";
import { ReferenceArea, ResponsiveContainer, LineChart } from "recharts";
import { rangePricesGenerator } from "../helpers/rangePrices";

function AreaHigh({ data, children }) {
    const [xHigh, setXHigh] = useState(null);

    useEffect(() => {
        if (data) {
            const rangePrices = rangePricesGenerator(data);
            rangePrices.reverse();

            const half = rangePrices.slice(0, rangePrices.length / 2);

            let sum = 0;
            half.forEach(v => {
                sum += v.sum;
            });
            let average = sum / half.length;
            setXHigh(half.filter(v => v.sum >= average));
        }
    }, [data]);

    const currentindex = data?.findIndex((el) => el.current);

    return (
        <ResponsiveContainer width="100%" height={400} >
            <LineChart data={data}>
                {children}
                {xHigh?.length ? xHigh.map(x =>
                    <ReferenceArea
                        key={x.i}
                        x1={x.i + currentindex}
                        x2={x.i + currentindex + 1}
                        stroke="red"
                        fill="red"
                        strokeOpacity={0.3}
                        fillOpacity={0.3}
                    />
                ) : null}
            </LineChart>
        </ResponsiveContainer>
    );
}

export default AreaHigh;
