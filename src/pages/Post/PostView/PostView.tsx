import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Header from '../../../components/Header/Header'
import PostCard from '../../../components/PostCard/PostCard'
import { Spinner } from '../../../components/Spinner/Spinner'
import { Error } from '../../../components/Error/Error'

import { RootState, useAppDispatch } from '../../../redux/store'
import { fetchPostById } from '../../../redux/posts/postsService'
import { postCleaned, postFoundById } from '../../../redux/posts/postsSlice'
import { loadContent } from '../../../shared/utils'

import './PostView.scss'
// import { getPostById } from '../../../redux/posts/postsService'

const PostView = () => {

  const params = useParams()
  const dispatch = useAppDispatch()
  const { post, status, error } = useSelector((state: RootState) => state.posts)

  useEffect(()=>{
    // dispatch(fetchPostById(params.id!))  -> Fetch from back
    
    // Find post from state
    dispatch(postFoundById(+params.id!)) 
    return () => { dispatch(postCleaned()) }
  },[dispatch, params.id])

  return (
    <>
      <Header />
      <section className='post-view__content'>
        {
          loadContent(
            status,
            <Spinner />,
            post ? <PostCard post={post} truncate={false} /> : <Spinner />,
            <Error message={ error?.message! } />
          )
        }
      </section>
    </>
  )
}

export default PostView