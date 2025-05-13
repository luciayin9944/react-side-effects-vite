import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const [jokeData, setJokeData] = useState(null)
  const [loading, setLoading] = useState(true)


  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts

  // Step 3: Define a function that fetches a programming joke from an API
  // - Start by setting `loading` to true
  // - Fetch a joke from "https://v2.jokeapi.dev/joke/Programming?type=single"
  // - Update the `joke` state with the fetched joke
  // - Set `loading` to false once the joke is loaded
  // - Handle any errors in the `.catch` block

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://v2.jokeapi.dev/joke/Programming?type=single`);
      const data = await response.json();
      setJokeData(data);
    } catch (error) {
      console.error('Failed to fetch joke:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      {/* jokeData !== null && jokeData !== undefined ? jokeData.joke : undefined */}
      <JokeDisplay joke={jokeData?.joke} loading={loading}/>
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={fetchJoke}/>
    </div>
  )
}

export default App
