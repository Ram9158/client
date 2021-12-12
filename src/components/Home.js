
import axios from "axios";
import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";
const baseURL= " http://localhost:3000/Student"

  function Home() {
    const [count, setcount] = React.useState(0);


  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        Name: "rameshea World!",
        Email: "This hdhsdhis a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
    };
  if (!post) return "<h1>No Post!</h1>"
  function reatePost() {
    axios
      .delete(`${baseURL}/${count}`,{
        // Name: "rameshea World!",
        // Email: "This a new post"
      })
      .then((response) => {
        setPost(response.data);
      });
      console.log(`Deleting Id:  ${count}`);
  }
 const ChangeId =()=>{
    setcount(count+1)

 }
  return (
    <div className="container text-cemter">
      <h1 style={{textAlign:'center'}}>{post.Name}</h1>
     <h1 st>{post.Email}</h1>
      <button onClick={reatePost}className="btn btn-primary my-3 mr-3" >Delet Post</button>
      <button onClick={ChangeId} className="btn btn-primary my-3 ml-3" >ChangeId</button>
      <button onClick={createPost} className="btn btn-primary my-3 ml-3" >Createpost</button>
    </div>
  );
}
export default Home;


