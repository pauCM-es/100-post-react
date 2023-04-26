import {postDeleted} from "../../redux/posts/postsSlice";
import { RootState, useAppDispatch } from "../../redux/store";

import type { Post } from "../../interfaces/post.interface"

import './PostCard.scss'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {
  post: Post
  truncate: boolean
}

const PostCard = ({ post, truncate }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((state: RootState) => state.login)


  const handleDelete = () => {
    if (window.confirm(`Do you really want to delete posts ${post.id}?`)) {
      dispatch(postDeleted(post.id))
      navigate('/')
    }
  }

  return (
    <div className={`card ${truncate && "truncate"}`}>
      <div className="card__header">
        <p className="card__id">{ post.id }</p>
        <div className="header__title">
          <h3 className="card__title">{ post.title }</h3>
          <p className="card__user">Post by User-{ post.userId }</p>
        </div>
      </div>

      <p className="card__content">{ post.body }</p>
      <div className="card__buttons">
        {
        truncate && 
          <Link to={`/post/${post.id}`} 
          className="card__btn card__btn--normal"
          >VIEW MORE</Link>
        }
        <div>
          <Link to={ isLoggedIn ? `/post/${post.id}/edit` : ""}
            className={`card__btn ${isLoggedIn ? "card__btn--edit" : "card__btn--disable"}`}
            
            >EDIT</Link>
          <button 
            className={`card__btn ${isLoggedIn ? "card__btn--delete" : "card__btn--disable"}`}
            onClick={() => {isLoggedIn && handleDelete()}}
          >DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default PostCard