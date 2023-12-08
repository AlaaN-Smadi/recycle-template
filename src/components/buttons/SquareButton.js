
export default function SquareButton(props) {
    return (
        <p id={props.id} onClick={props.handleClick} className={`square-text ${props.send && "send-btn"}`}>
            {props.btnText}
        </p>
    )
}