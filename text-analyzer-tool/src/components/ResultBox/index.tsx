import './index.scss'
import { IResult } from '../../types'

interface Prop
{
  result: IResult;
}

const ResultBox = ({result}: Prop) => {
  const resultBar = [
    {
      title: 'Words',
      value: result.words,
    },
    {
      title: 'Characters',
      value: result.characters,
    },
    {
      title: 'Sentences',
      value: result.sentences,
    },
    {
      title: 'Paragraphs ',
      value: result.paragraphs,
    },
    {
      title: 'Pronouns',
      value: result.pronouns,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
