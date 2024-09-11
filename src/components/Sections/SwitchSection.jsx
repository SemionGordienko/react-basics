import Button from "../Button/Button";

export default function SwitchSection({active, changeTab}) {
    return (
        <section>
            <Button isActive = {active == 'Difficult'} onClick = {() => changeTab('Difficult')}>Difficult Section</Button>
            <Button isActive = {active == 'Reasons'} onClick = {() => changeTab('Reasons')}>Reasons Section</Button>
            <Button isActive = {active == 'Footer'} onClick = {() => changeTab('Footer')}>Footer Section</Button>
        </section>
        
    )
}