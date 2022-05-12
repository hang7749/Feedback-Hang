import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from "./shared/Card"
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {

  //Use State Example
  // const [rating, setRating] = useState(12)
  // const [text, setText] = useState('This is an example of a feedback item!')


  // const handleClick = () => {
  //   setRating( (prev) => {
  //       return 10+prev
  //   })
  // }

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>deleteFeedback(item.id)} className="close">
          <FaTimes color = 'purple' />
        </button>
        <button onClick={()=>editFeedback(item)} className="edit">
          <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem

