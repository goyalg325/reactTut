import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://th.bing.com/th/id/R.6023b52bd3c6c390b41563ca2cca0137?rik=8%2fPJBB7AjVV0Nw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fOQZpsb2.jpg&ehk=ou%2bb6YuzUKvxm0oXmW81lX0N6YT1RKbDMzV3sJy9Ujo%3d&risl=&pid=ImgRaw&r=0" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sk">
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </>
  )
}

export default App
