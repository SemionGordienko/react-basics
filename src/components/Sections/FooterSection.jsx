import FooterBtns from "./FooterBtns"
import { useState } from "react"

export default function FooterSection() {

  const [test, setTest] = useState('h1')

  return (
    <>
      <h3>Thats footer section, change 'h' as you wish</h3>

      <FooterBtns 
        changeTest={(thisTest) => setTest(thisTest)}
      />
  
      {test == 'h1' && (
        <h2>h1</h2>
      )}

      {test == 'h2' && (
          <h2>h2</h2>
      )}

      {test == 'h3' && (
          <h2>h3</h2>
      )}
    </>    
  )   
}