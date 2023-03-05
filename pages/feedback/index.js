import { buildFeedBackPath, extractFeedBack } from '../api/feedback'

const FeedbackPage = props => {
  return (
    <ul>
      {props.feedbackItems.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const filePath = buildFeedBackPath()
  const data = extractFeedBack(filePath)

  return {
    props: {
      feedbackItems: data,
    },
  }
}

export default FeedbackPage
