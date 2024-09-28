import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(()=>{
    axios.get('/api/quotes')
    .then((response)=>{
      setQuotes(response.data)
    })
    .catch((err)=>{
      console.log(err);
      
    })
  })

  return (
    <div>
     <h1>Hello Frontend</h1>

     <h2>Number of Quotes {quotes.length}</h2>
     <h3>Quotes</h3>
     <p>
      {
        quotes.map((quote)=>(
          <div key={quote.id}>
          <h3>{quote.id}</h3>
          <p>{quote.quote}</p>
          <p>{quote.writter}</p>
          </div>
        ))
      }
     </p>
    </div>
  )
}

export default App
