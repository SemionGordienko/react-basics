import classes from './Button.module.css'

export default function Button({ children, onClick, isActive}) {

    console.log(classes)

    return (
    <button className={isActive ? classes.ButtonActive : classes.Button} onClick={onClick}>
        {children} 
    </button>
    )
}