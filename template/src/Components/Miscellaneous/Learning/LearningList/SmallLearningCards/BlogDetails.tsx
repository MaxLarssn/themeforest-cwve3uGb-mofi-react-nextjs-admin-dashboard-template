import { BlogDetailsProp } from "@/Types/LearningType";

const BlogDetails :React.FC<BlogDetailsProp>= ({ text, title }) => {
  return (
    <div className="blog-details-main">
      <ul className="blog-social justify-content-center">
        <li className="rounded-0">9 April 2023</li>
        <li>by: Admin</li>
        <li>0 Hits</li>
      </ul>
      <hr />
      <h5 className="f-w-600">{title}</h5>
      <p className="blog-bottom-details">{text}</p>
    </div>
  );
};

export default BlogDetails;