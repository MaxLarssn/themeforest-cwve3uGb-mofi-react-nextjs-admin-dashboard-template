import { BlogWithoutDetailHeading } from "@/Constant";

const ListOfBlogWithoutDetails = () => {
  return (
    <div className="blog-details-main">
      <ul className="blog-social">
        <li className="digits rounded-0">9 April 2023</li>
        <li className="digits rounded-0">by: Admin</li>
        <li className="digits rounded-0">0 Hits</li>
      </ul>
      <hr />
      <h5 className="f-w-600">{BlogWithoutDetailHeading}</h5>
      <p className="blog-bottom-details mt-2">A huge part of it is the incomparable beauty you can encounter every day.People just anymore profound.</p>
    </div>
  );
};

export default ListOfBlogWithoutDetails;