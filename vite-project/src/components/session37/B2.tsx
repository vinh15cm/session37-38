import { useMemo } from "react";
interface People {
    id: number;
    name: string;
    age: number;
}
export default function B2() {
    const listPeople: People[] = [
        { id: 1, name: "Quang Vinh", age: 19 },
        { id: 2, name: "Quang Vinh 2", age: 15 },
        { id: 3, name: "Quang Vinh 3", age: 20 },
        { id: 4, name: "Quang Vinh 4", age: 17 },
        { id: 5, name: "Quang Vinh 5", age: 18 },
    ];
    const findPeople = useMemo(() => {
        return listPeople.filter((person: People) => person.age >= 18);
    }, [listPeople]);
    return (
        <div>
            <ul>
                {findPeople.map((person) => (
                    <li key={person.id}>
                        {person.name} - Age: {person.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}