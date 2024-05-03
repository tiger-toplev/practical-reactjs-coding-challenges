import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

import { IResult } from './types'

const App = () => {
  const [result, setResult] = useState<IResult>({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    pronouns: 0,
    readingTime: 0,
    longestWord: '-'
  });

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox result={result} />
          <TextArea setResult={setResult} />
          <BottomResultBox result={result} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
