import './Button.css';

const Button = (props) =>{
    return(
        <button onClick={props.onClick} className={`btn ${props.className}`}>{props.value}</button>
    );
}

export default Button;