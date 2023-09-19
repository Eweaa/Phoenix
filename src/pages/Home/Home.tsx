import React from 'react'
import Feed from '../../components/Feed/MessageSender'
import Post from '../../components/Post/Post'

const Home: React.FC = () => {
  return (
    <div>
        <Feed />
        <Post
        // key={id}
        profilePic="https://th.bing.com/th/id/OIP.JVTzEEC-CE-ZlheyAFr99wHaE8?pid=ImgDet&w=1068&h=712&rs=1"
        message="Tiny text, also called small text, is a collection of Unicode characters that look like a small font. The small text gives your social media profiles and text messages a tempting appearance and helps you stand out from the crowd. Also, small text is widely used to attract people towards your content by making it more appealing."
        timestamp="October 11"
        userName="Mohammedelsayed2436"
        image="https://th.bing.com/th/id/OIP.lbwKpvSmTfUuBMW8DG6aIgHaLH?pid=ImgDet&rs=1"
      />
      <Post
        // key={id}
        profilePic="https://irp-cdn.multiscreensite.com/d8037e1a/dms3rep/multi/Functional+Medicine+Doctor+Chicago.jpeg"
        message="The demo works"
        timestamp="October 17"
        userName="Ahmed"
        image="https://th.bing.com/th/id/OIP.WkBEkds_0Aarf08fxlLMegHaHa?pid=ImgDet&w=1024&h=1024&rs=1"
      />
    </div>
  )
}

export default Home