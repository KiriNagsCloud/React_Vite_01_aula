import './btn.module.css'

export const Btn = ({text, func}) => {
    return(
        <button onClick={() => window.location.href=func}>
            {text}
        </button>
    )
}