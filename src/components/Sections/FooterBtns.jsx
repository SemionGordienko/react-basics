import Button from "../Button/Button"
import { useState } from "react"

export default function FooterBtns({changeTest, print}) {
    const [count, setCount] = useState(0)

    function FooterBtn() {
        confirm('hi')
    }

    function Counter() {
        setCount(count + 1)
    }

    return (
        <section>
            <Button onClick={FooterBtn}>Footer button</Button>
            <Button onClick={Counter}>{count}</Button>
            <Button onClick={() => changeTest('h1')}>h1</Button>
            <Button onClick={() => changeTest('h2')}>h2</Button>
            <Button onClick={() => changeTest('h3')}>h3</Button>
        </section>
    )
}