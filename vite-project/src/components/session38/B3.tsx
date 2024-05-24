import React, { useCallback, useState } from "react"

export default function B3() {
    const [color, setColor] = useState<string>("");
    const choiceColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }, [color])
    return (
        <div>BT03
            <p>Màu người dùng chọn: </p>
            <input onChange={choiceColor} type="color" />
            <p>Màu hiển thị:</p>
            <div style={{ width: "100px", height: "70px", backgroundColor: `${color}` }}></div>
        </div>
    )
}