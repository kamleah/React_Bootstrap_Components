import React from "react";
import PropTypes from "prop-types";

const post = ({postData}) => {
  return(
   <div>
       {
           postData.map((index,data)=>(
               <div>
                   <h5>{index.title}</h5>
                    <p>{index.post}</p>
               </div>
           ))
       }
  </div>
  )
}

post.propTypes = {
  postData: PropTypes.array,
};
post.defaultProps = {
  postData: [
    {
      title: "Hello This is Title 1",
      post: "Post of the title",
    },
    {
      title: "Hello This is Title 2",
      post: "Post of the title",
    },
    {
      title: "Hello This is Title 3",
      post: "Post of the title",
    },
    {
      title: "Hello This is Title 4",
      post: "Post of the title",
    },
    {
      title: "Hello This is Title 5",
      post: "Post of the title",
    },
    {
      title: "Hello This is Title 6",
      post: "Post of the title",
    },
  ],
};

export default post;
