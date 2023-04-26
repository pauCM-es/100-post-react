import { useEffect } from "react"
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchPosts }  from "../../redux/posts/postsService";

import { Error } from "../../components/Error/Error";
import { Spinner } from "../../components/Spinner/Spinner";
import PostsList from "../../components/PostsList/PostsList";

import './Home.scss'
import Header from "../../components/Header/Header";
import { loadContent } from "../../shared/utils";

const Home = () => {
  const { posts, status, error } = useSelector((state: RootState) => state.posts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // to preserve the deleted posts while moving between pages
    // the posts fetch is only done at the start.
    posts.length === 0 && dispatch(fetchPosts())
  }, [dispatch])

  return (
    <main className="home">
      <Header />
      <section className="home__content">
        {
          loadContent(
            status,
            <Spinner />,
            <PostsList posts={ posts } />,
            <Error message={ error?.message! } />
          )
        }
      </section>
    </main>
  )
}

export default Home

