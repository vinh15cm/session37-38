import React, { useCallback, useState } from "react";

interface Infor {
    email: string;
    password: string;
}

export default function B6() {
    const [infor, setInfor] = useState<Infor>({
        email: "",
        password: "",
    });

    const changeEvent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInfor((prevInfor) => ({
            ...prevInfor,
            [name]: value,
        }));
    }, []);
    const handleClick = useCallback(() => {
        console.log("Submitted:", infor);
    }, [infor]);
    return (
        <div>
            <p>BT06</p>
            <label htmlFor="email">Email:</label>
            <input onChange={changeEvent} name="email" type="email" />
            <br />
            <label htmlFor="password">Password:</label>
            <input onChange={changeEvent} name="password" type="password" />
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}