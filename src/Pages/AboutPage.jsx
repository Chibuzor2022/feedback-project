import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <div className="about">
      <h1>About this Project</h1>
        <p>This is a React App to leave a feedback for a service or product</p>
           <p>
          <Link to="/">Back to Home Page</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage