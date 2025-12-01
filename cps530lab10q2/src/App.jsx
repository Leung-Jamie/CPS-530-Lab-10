import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h2>How I created this Webpage</h2>

      <div class="page_creation">
        <p>
          This website was created with, as seen above, by using the framework React and Vite.
          I installed and ran the framework, by using the official Vite porduct generator, in 
          my terminali ran the following script: 
        </p>

         <pre>{`npm create vite@latest`}</pre>

        <p>
          After running this command, I followed the instructions prompted, and selected to create 
          a React project using Javascript. After this I worked out how to host the site on github's servers.
        </p>
      </div>

      <h2>How I edited this webpage</h2>

      <div class="edit_page">
        <p>
          This page was edited using Javascript and only using App.jsx. As this Lab only reqires one page, 
          this is the only page in the repo, if multiple pages were needed then I would have multiple 
          jsx files.
        </p>
        <p>
          There is also an attached css file for the App.jsx. i used very simple React functionalities, 
          and Javascript/Html code, just enought to make the page look appealing and informative.
        </p>
        <p>
          After editing, I built the website, using Vite's built in building command:
        </p>

        <pre>{`npm run build`}</pre>

        <p>
          Then I deployed the built <code>dist/</code> folder to GitHub Pages using the <code>gh-pages</code> package. 
          This will make the page viewable to the public. I then set the github repo to deploy the correct page, for the hosting.
        </p>
      </div>

      <h2>Difficulties</h2>

      <div class="difficulties">
        <p>
          The difficulties I experienced while doing this lab was only with the hosting and deployment of the site. 
          The github documentationm was slightly confusing, and I had to research how to actually get the page to output to the public. 
          After figuring out that I needed to change the base in the config file, and that I needed the <code>gh-pages</code> 
          commnad, It was pretty easy to figure out the rest. After this I built the project, then delpoyed it, 
          and it is now what you see here.
        </p>
      </div>

      <footer>
        © 2025 - CPS 530 Lab 10 - Vite + React
      </footer>
    </>
  )
}

export default App
