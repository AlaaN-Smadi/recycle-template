
export default function CircleButton(props) {
    return (
        <span onClick={()=>{props.handleClick && props.handleClick(props.title)}} className={`circle-button ${props.activeSelect && 'active-border'}`}>
            {props.title}
        </span>
    )
}