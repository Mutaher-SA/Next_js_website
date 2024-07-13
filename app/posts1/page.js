"use client";
import { useEffect, useState } from "react";
import TableEmp from "../components/TableEmp";
import DataHandling from "../components/DataHandling";
import { Loadingscreen } from "../components/loadingscreen";

const Posts = () => {
  const { isWaitingData, connServerError, posts: fetchedPosts } = DataHandling('https://jsonplaceholder.typicode.com/posts');
  const [posts, setPosts] = useState([]);
  const [checkStatus, setCheckStatus] = useState('OK!');

  useEffect(() => {
    if (fetchedPosts) {
      setPosts(fetchedPosts);
    }
  }, [fetchedPosts]);

  const DeleteEmp = (id) => {
    const updateEmp = posts.filter(post => post.id !== id);
    setPosts(updateEmp);
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      {isWaitingData && <Loadingscreen /> }
      {connServerError && <h3>{connServerError}</h3>}

      {posts && (
        <TableEmp
          posts={posts}
          tableName="Showing all Employees"
          DeleteEmp={DeleteEmp}
        />
      )}
    </div>
  );
};

export default Posts;
