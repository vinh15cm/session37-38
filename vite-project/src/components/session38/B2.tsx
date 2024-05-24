interface Props {
    id: number,
    name: string,
    age: number
}
export default function B2() {
    const Person: Props[] = [
        {
            id: 1,
            name: "name 1",
            age: 18,
        },
        {
            id: 2,
            name: "name 2",
            age: 15,
        },
        {
            id: 3,
            name: "name 3",
            age: 19,
        },
        {
            id: 4,
            name: "name 4",
            age: 18,
        },
        {
            id: 5,
            name: "name 5",
            age: 18,
        },
    ]
    const find = Person.filter((item: Props) => {
        return item.age >= 18
    })
    return (
        <div>BT02
            <ul>
                {find.map((item: Props) => {
                    return <li key={item.id}>{item.name} - {item.age}</li>
                })}
            </ul>
        </div>
    )
}