import React from "react";
import { IState as Props } from "../App"

interface IProps {
    key: Props["key"]
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const List: React.FC<IProps> = ({ people, setPeople }) => {

    const delName = (index: number):void => {
        setPeople(current => current.filter(person => {
            return person.id !== index
        }))
    }

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
            <li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.url}/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
                <button
                    onClick={()=> delName(person.id)}
                >
                    X
                </button>
            </li>
        )})}


    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List