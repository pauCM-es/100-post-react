import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Header from '../../../components/Header/Header'
import { Spinner } from '../../../components/Spinner/Spinner'
import { Error } from '../../../components/Error/Error'

import { RootState, useAppDispatch } from '../../../redux/store'
// import { fetchPostById } from '../../../redux/posts/postsService'
import { postCleaned, postEdited, postFoundById } from '../../../redux/posts/postsSlice'
import { loadContent } from '../../../shared/utils'

import './PostEdit.scss'
import { Post } from '../../../interfaces/post.interface'

const PostEdit = () => {

  const params = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { post, status, error } = useSelector((state: RootState) => state.posts)
  const [updatedPost, setUpdatedPost] = useState<Post>(post!)
  
  useEffect(() => {
    // dispatch(fetchPostById(params.id!)) -> This to fetch the info from the back
    dispatch(postFoundById(+params.id!))  // This one to get the post from the state to keep the edits done
    return () => { dispatch(postCleaned()) }
  }, [dispatch, params.id])
  
  useEffect(()=> {
    setUpdatedPost(post!)
  },[post])
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
      event.preventDefault()
      console.log("Post updated: ",updatedPost);
      dispatch(postEdited({id: post?.id!, postEdited: updatedPost}))
      navigate('/')
    };

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
      const { name, value } = event.target;
      let newPost: Post = {
        ...updatedPost,
        [name]: value,
      }
      setUpdatedPost(newPost);
    };

  // type infered
  const editForm = (
    <form className="editForm" onSubmit={handleSubmit}>
      <div className='editForm__header'>
        <p className="editForm__id">ID: { post?.id }</p>
        <p className="editForm__user">Post by User-{ post?.userId }</p>
      </div>

      <label htmlFor="title" className='form-label'>Title:</label>
      <textarea name='title' className="editForm__title form-field" 
      rows={2} defaultValue={post?.title} 
      onChange={handleInput}
      />

      <label htmlFor="body" className='form-label'>Content:</label>
      <textarea name='body' className="editForm__content form-field" 
        rows={10} defaultValue={post?.body} 
        onChange={handleInput}
      />

      <div className="editForm__buttons">
        <Link
          to='/'
          className="editForm__btn editForm__btn--cancel"
        >CANCEL</Link>
        <button
          type='submit'
          className="editForm__btn editForm__btn--success"
        >SAVE</button>
      </div>
    </form>
  )

  return (
    <>
      <Header />
      <section className='post-edit__content'>
        {
          loadContent(
            status,
            <Spinner />,
            post ? editForm : <Spinner />,
            <Error message={ error?.message! } />
          )
        }
      </section>
    </>
  )
}

export default PostEdit