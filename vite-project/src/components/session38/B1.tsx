import { useCallback, useState } from "react"
export default function B1() {
    const [count, setCount] = useState<number>(0);
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count])
    return (
        <div>BT01
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}