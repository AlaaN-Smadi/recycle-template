export default function SquareInput(props){
    return (
        <input 
            onChange={props.handleChange}
            type={props.type}
            inputMode={props.inputMode || ""}
            placeholder={props.placeholder}
            className={`square-text ${props.smallText && "small-text"} 
                ${props.leftText && "left-text"} ${props.noMargin && "no-margin"} ${props.location && "location-btn"} 
                ${props.squareLocation && 'square-location-btn'} ${props.activeSelect && 'active-title-border'}
                ${props.centerText && 'center-text'} ${props.disableClick && "disabled"}`}
        />
    )
}