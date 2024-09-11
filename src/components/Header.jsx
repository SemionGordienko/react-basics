import logo from '/logo2.png'
import '../index.css'
import { useState } from 'react';

const now = new Date();

export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (
      <header>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank'>
            <img className='logo' src={logo} alt="FYSF" style={{height: '35px'}}/>
          </a>
          <h3>Basics of React</h3>
          <span>Time: {now.toLocaleTimeString()} </span>
        </header>
    )
  }

  