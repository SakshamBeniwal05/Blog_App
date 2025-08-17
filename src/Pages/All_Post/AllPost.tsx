import React from 'react'
import DocumentServices from '../../Services/docs'
import Card from '../../assets/Crad/Card'
import './AllPost.css'
import { useNavigate, Link } from 'react-router-dom'
import Button from '../../assets/button/Button'

const AllPost = () => {
  const [posts, setPosts] = React.useState([])
  const navigate = useNavigate()

  const navigate_back = () => {
    navigate("/")
  }

  React.useEffect(() => {
    DocumentServices.gets([]).then((res) => {
      if (res && res.documents) {
        setPosts(res.documents)
      }
    })
  }, [])

  return (
    <div id="allpos_body">
      {posts.length > 0 ? (
        <>
        <Button type='buttom' work='Back' id="back" onClick={navigate_back}/>
          <div id="posts">
            <div id="allPosts">
              <div id="tagline">
                Voices from Everywhere, Stories for Everyone.
              </div>
            </div>
            <div id="card_body">
              {posts.map((post) => (
                <Card
                  title={post.title}
                  content={post.content}
                  writer={post.writer}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div id="none">
          <div id="all_post_text">No Blogs found</div>
          <Link to="/">
            <Button type="button" width="20vw" work="Home" bgcolor="ff6200" />
          </Link>
        </div>
      )}
    </div>
  )
}

export default AllPost
