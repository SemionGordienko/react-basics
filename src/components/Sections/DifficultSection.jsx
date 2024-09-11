import Button from "../Button/Button"
import { differences } from "../../data"
import { useState } from "react"

export default function DifficultSection() {

    const [contentType, setContentType] = useState()

    function handleClick(type) {
        setContentType(type)
    }

    return (
    <section>
        <h3>Difficult range</h3>
        <Button isActive={contentType == 'easy'} onClick={() => handleClick('easy')}>Easy</Button>
        <Button isActive={contentType == 'medium'} onClick={() => handleClick('medium')}>Medium</Button>
        <Button isActive={contentType == 'hard'} onClick={() => handleClick('hard')}>Hard</Button>
        {contentType ? (
        <h3>{differences[contentType]}</h3>
        ) : (
        null
        )}
    </section>
    )
}