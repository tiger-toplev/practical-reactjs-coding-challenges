import './index.scss'
import { IResult } from '../../types'

interface Prop
{
  result: IResult;
}

const BottomResultBox = ({result}: Prop) => {
  const genReadingTimeStr = (time: number): string => {
    if(time === 0) {
      return '-';
    }
    if(time === 1) {
      return '~' + result.readingTime + ' minute'
    }
    return '~' + result.readingTime + ' minutes'
  }
  
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: genReadingTimeStr(result.readingTime),
    },
    {
      title: 'Longest word:',
      value: result.longestWord
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
