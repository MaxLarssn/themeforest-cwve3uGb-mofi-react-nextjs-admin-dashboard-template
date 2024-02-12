import { DateLearning } from "@/Constant";

const BlogDetails = () => {
  const DetailedCourseParagraph1 = `Knowledge can be defined as awareness of facts or as practical skills, and may also refer to familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification. While there is wide agreement among philosophers that it is a form of true belief, many controversies in philosophy focus on justification: whether it is needed at all, how to understand it, and whether something else besides it is needed.`;
  const DetailedCourseParagraph2 = `Knowledge can be produced in many different ways. The most important source is perception, which refers to the usage of the five senses. Many theorists also include introspection as a source of knowledge, not of external physical objects, but of one's own mental states. Other sources often discussed include memory, rational intuition, inference, and testimony. According to foundationalism, some of these sources are basic in the sense that they can justify beliefs without depending on other mental states. This claim is rejected by coherentists.`;
  const DetailedCourseHeading = `Knowledge can be defined as awareness of facts or as practical skills. there is wide agreement among philosophers that it is a form of true belief.`;

  return (
    <div className="blog-details">
      <ul className="blog-social d-block">
        <li className="rounded-0">{DateLearning}</li>
        <li><i className="icofont icofont-user" />Mark <span>Jecno </span></li>
        <li><i className="icofont icofont-thumbs-up" />02 <span>Hits </span></li>
        <li><i className="icofont icofont-ui-chat" />Comments</li>
      </ul>
      <h4>{DetailedCourseHeading}</h4>
      <div className="single-blog-content-top">
        <p>{DetailedCourseParagraph1}</p>
        <p>{DetailedCourseParagraph2}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
