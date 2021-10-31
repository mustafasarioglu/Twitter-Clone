import React,{useState,useEffect,useContext}from 'react';
import HomeIcon from '@mui/icons-material/Home';
import './MiddleSection.css'
import TweetBox from '../TweetBox/TweetBox';
import db from '../../firebase';
import Post from '../Post/Post';
import ThemeContext  from '../../context/theme.js'




function MiddleSection() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);

    const {theme} = useContext(ThemeContext)
    return (
    <div className={theme === "light"?"middle-section":"middle-section-dark"}>

        <div className={theme==="light"? "feed-header" :"feed-header-dark"}>
            <h2>Anasayfa</h2>
            <HomeIcon />
        </div>
        <TweetBox />
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
        

    </div>
    )
}

export default MiddleSection
