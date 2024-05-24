import React, { useCallback, useState } from "react";

export default function B5() {
    const [nameJob, setNameJob] = useState<string>("");
    const [arr, setArr] = useState<string[]>([]);

    const btnClick = useCallback(() => {
        if (nameJob.trim() !== "") {
            setArr((prev) => [...prev, nameJob]);
            setNameJob("");
        }
    }, [nameJob]);

    return (
        <div>
            <p>Giao diện todoList</p>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNameJob(e.target.value)
                }
                value={nameJob}
                type="text"
                placeholder="Nhập tên công việc"
                required
            />
            <button onClick={btnClick}>Thêm</button>
            <ul>
                {arr.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}