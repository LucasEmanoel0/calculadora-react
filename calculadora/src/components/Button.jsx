import './styles/button.css'

// eslint-disable-next-line react/prop-types
export default function Button({number,className,style,onClick}){
    return(
        // eslint-disable-next-line react/no-unknown-property
        <button className={`button ${className}`} style= {style} onClick={onClick}>
            {number}
        </button>
    )
}