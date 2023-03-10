import { useRef, useState } from 'react'

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([])
  console.log(feedbackItems)

  const emailInputRef = useRef()
  const feedbackInputRef = useRef()

  function submitFormHandler(e) {
    e.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredFeedback = feedbackInputRef.current.value

    const reqBody = { email: enteredEmail, text: enteredFeedback }

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then(res => res.json())
      .then(data => setFeedbackItems(data.feedback))
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Your feedback</label>
          <textarea id='feedback' row='5' ref={feedbackInputRef}></textarea>
        </div>
        <button>Send feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
