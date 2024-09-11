import { Reasons } from "../../data"
import WayToList from "../WayToList"

export default function ReasonsSection() {
    return (
        <section>
          <h3>Lets talk about difficulty in Soulslike games...</h3>
          <ul>
            {Reasons.map((Reasons) => {
              return <WayToList key={Reasons.description} {...Reasons}/>
            })}
          </ul>
        </section>
    )
}