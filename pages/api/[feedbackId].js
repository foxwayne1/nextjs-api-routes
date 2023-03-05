import { buildFeedBackPath, extractFeedBack } from './feedback'

export default function handler(req, res) {
  const feedbackId = req.query.feedbackId
  const filePath = buildFeedBackPath()
  const feedbackData = extractFeedBack(filePath)

  const selectedFeedback = feedbackData.find(
    feedback => feedback.id === feedbackId
  )
  res.status(200).json({ feedback: selectedFeedback })
}
