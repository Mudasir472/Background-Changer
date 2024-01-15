import "./body.css"

export default function GetColor({color,name,setColor,className}) {
    return (
        <button className={className} onClick={() =>setColor(color)}>{name}</button>
    )
}