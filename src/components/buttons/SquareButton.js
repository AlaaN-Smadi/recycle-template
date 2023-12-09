
export default function SquareButton(props) {
    return (
        <p id={props.id} onClick={props.handleClick} className={`square-text ${props.send && "send-btn"} ${props.disableClick && "disabled"} ${props.fixedBottom && "fixed-to-bottom"}`}>
            {props.btnText}
        </p>
    )
}