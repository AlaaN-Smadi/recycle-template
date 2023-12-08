export default function SquareText(props){
    return (
        <p className={`square-text ${props.smallText && "small-text"} ${props.leftText && "left-text"} ${props.noMargin && "no-margin"} ${props.location && "location-btn"} ${props.squareLocation && 'square-location-btn'}`}>
            {props.text}
        </p>
    )
}