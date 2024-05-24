import { useMemo, useState } from "react"
export default function B4() {
    const [random, setRandom] = useState<number>(0);
    const btnRandom = useMemo(() => {
        return () => setRandom(Math.floor(Math.random() * 1000));
    }, [random])
    return (
        <div>BT04
            <p>Number Random: {random}</p>
            <button onClick={btnRandom}>Generate</button>
        </div>
    )
}