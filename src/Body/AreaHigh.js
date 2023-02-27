import { useState, useEffect } from "react";
import { ReferenceArea } from "recharts";

function AreaHigh({ rangePrices }) {
    const [xHigh, setXHigh] = useState(null);

    useEffect(() => {
        if(!rangePrices) return;
    
        rangePrices.reverse();
        const half = rangePrices.slice(0, rangePrices.length / 2);
        let sum = 0;
        half.forEach(v => {
            sum += v.sum;
        });
        let average = sum / half.length;
        setXHigh(half.filter(v => v.sum > average));
        
    }, [rangePrices]);

    return xHigh?.length ? xHigh.map(x =>
        <ReferenceArea key={x.i} x1={x.i + 10} x2={x.i + 10 + 1} stroke="red" fill="red" strokeOpacity={0.3} fillOpacity={0.3} />
    ) : <></>;
}

export default AreaHigh;
