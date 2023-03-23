import { useState, useEffect } from "react";
import { ReferenceArea, ResponsiveContainer, LineChart } from "recharts";
import { rangePricesGenerator } from "../helpers/rangePrices";

function AreaHigh({ data, children }) {

    // useState eto react hook kotoryj pozvoljajet rabotat' s sostojanijem komponenta.
    // Sostojanije po suti eto peremennaja kotoraja dezhqt v sebja ljuboj tip dannyh kotoryj kosajetsa tol'ko etogo komponenta
    // useState prinemajet kak argument iznachal'noe sostojanije. 
    // Toejst pri pervoj otrisovke komponenta naznachitsa peremennaja s etim iznachalnym znachenijem.
    // useState pri inicializacii vozvrashajet massive iz dvuh elementov.
    // [0] = iznachal'noe sostojanie
    // [1] = funkcija kotoroje menjajet znachenije sostojanija. V nachalo nazvanije obychno stavim 'set'.
    // Pri inicializacii izmenenija sostojanija zapuskajetsa novaja otrisovka komponenta;
    // Vse hooki reacta nazyvajutsa s slovo 'use' i vse oni vozdejstvujut na atrisovku komponenta.
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
