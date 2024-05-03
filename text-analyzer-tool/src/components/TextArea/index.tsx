import './index.scss'
import { useState } from 'react';
import { IResult } from '../../types'
import { Dispatch, SetStateAction } from 'react';
import { pronouns } from '../../data/pronouns'

interface Prop
{
  setResult: Dispatch<SetStateAction<IResult>>;
}

const TextArea = ({setResult}: Prop) => {
  const [text, setText] = useState('');
  const handleChange = (e: any) => {
    const str = e.target.value
    setText(str);
    let pronounCount = 0;
    const pureWordArray = str.trim().split(/[,.?! ]/); // without punctuation mark
    pureWordArray.forEach((word: string) => {
      if(pronouns.includes(word.trim().toLowerCase())) {
        pronounCount++;
      }
    })
    const wordsCount = str.trim().split(' ').length;

    const sentenceCount = str.trim().split(/[.?!]/g).filter(Boolean).length;
    let maxLength = 0;
    let longestWord = '';
    for (let i = 0; i < pureWordArray.length; i++) {
      if (pureWordArray[i].length > maxLength) {
        maxLength = pureWordArray[i].length;
        longestWord = pureWordArray[i];
      }
    }
    
    const paragraphCount = str.replace(/\n$/gm, '').split(/\n/).length;
    setResult(a => {
      return {
        ...a,
        words: str.trim().split(' ').length,
        characters: str.length,
        pronouns: pronounCount,
        sentences: sentenceCount,
        paragraphs: paragraphCount,
        readingTime: Math.ceil(wordsCount / 225),
        longestWord: longestWord
      }
    });
  }
  return <textarea className="text-area" placeholder="Paste your text here..." onChange={handleChange}/>
}

export default TextArea
