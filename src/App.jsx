import FluidHoverCard from './components/fluid-hover-cards/fluid-hover-cards';

import './App.css'

function App() {

  return (
    <>
      <FluidHoverCard 
        option={
          {
            height: 350,
            // textBoxTheme: 'white'
          }
        }
        data={[
          {title: "Household Accounts", content: "Content ontent ontent ontent ontent ontent ontent ontent ontent ontent ", img: {path: "/img/test-img.png"}, link: [{url:'https://household-accounts-ui.vercel.app/en/login', name:'Deploy'}, {url:'https://household-accounts-ui.vercel.app/en/login', name:'GitHub'}]}, 
          {title: "Title2", content: "Content2", img: {path: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d"}}, 
          {title: "Title2", content: "Content2", img: {path: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d"}}, 
        // {title: "Household Accounts", content: "Content", img: {path: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d"}}
      ]}
      />
    </>
  )
}

export default App
