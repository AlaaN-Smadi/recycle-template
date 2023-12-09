export default function SquareText(props){
    return (
        <p onClick={()=>props.handleClick && props.handleClick(props.text)} className={`square-text ${props.smallText && "small-text"} ${props.leftText && "left-text"} ${props.noMargin && "no-margin"} ${props.location && "location-btn"} ${props.squareLocation && 'square-location-btn'} ${props.activeSelect && 'active-title-border'}`}>
            {props.text}
        </p>
    )
}