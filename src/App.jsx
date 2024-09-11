import Header from "./components/Header"
import ReasonsSection from "./components/Sections/ReasonsSection"
import DifficultSection from "./components/Sections/DifficultSection"
import GreetingMessage from "./components/GreetingMessage"
import SwitchSection from "./components/Sections/SwitchSection"
import FooterSection from "./components/Sections/FooterSection"
import { useState } from "react"


export default function App() {

  const [tab, setTab] = useState()

  return (
    <div>
      <Header />
      <main>
        <GreetingMessage message='Greetings!'/>
        <SwitchSection active ={tab} changeTab={function(current) {
          setTab(current)
        }}/>

        {tab == 'Reasons' && (
          <>
            <ReasonsSection />
          </>
        )}

        {tab == 'Difficult' && (
          <>
            <DifficultSection />
          </>
        )}

        {tab == 'Footer' && (
          <>
            <FooterSection />
          </>
        )}

      </main>
    </div>
  )
}

