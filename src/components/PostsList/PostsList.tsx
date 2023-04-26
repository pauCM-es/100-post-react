import { Post } from "../../interfaces/post.interface"
import PostCard from "../PostCard/PostCard"
import './PostsList.scss'

interface Props {
  posts: Post[]
}

const PostsList = ({ posts }: Props) => {
  return (
    <div className="postlist">
      {
        posts.map(post => <PostCard key={post.id} post={post} truncate={true}/>)
      }
    </div>
  )
}

export default PostsList
