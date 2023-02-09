import React, { useState } from 'react';

export function FComponent({ firstName, lastName, age }) {
    return (
        <div>
            firstName: {firstName}<br />
            lastName: {lastName}<br />
            age: {age}
        </div>
    );
}

FComponent.defaultProps = {
    firstName: 'Rasim',
    lastName: 'Mehtijev',
    age: 33,
}

export const CComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>count: {count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <InnerComponent setCount={setCount} count={count}>
                <ClassComponent />
            </InnerComponent>
        </>
    );
}

function InnerComponent({ setCount, count, component, children }) {
    if(component) console.log('privet');
    return (
        <>
            <button onClick={() => setCount(count - 1)}>-</button>
            {component && (<>Privet</>)}
            {children}
        </>
    );
}

export class ClassComponent extends React.Component {
    render() {
        return (
            <div>ClassComponent</div>
        )
    }
}

export function MotherComponent() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>Toggle Show</button>
            {show && <ChildComponent/>}
        </>
    );
}

const ChildComponent = () => <div>ChildComponent</div>;
