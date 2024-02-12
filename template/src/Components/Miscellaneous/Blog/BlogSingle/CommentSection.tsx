import { Comments } from "@/Constant";
import UserComment from "./common/UserComment";

const CommentSection = () => {
  const SingleBlogParagraph: string = `The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant.`;
  const CommentBlog2: string = "From the east coast to the west, each river has its own beauty and character. Each river has its own story. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
  const SingleBlogParagraphs: string = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`;

  return (
    <section className="comment-box">
      <h4>{Comments}</h4>
      <hr />
      <ul>
        <UserComment ImageSrc="comment.jpg" userReplay text={SingleBlogParagraph} />
        <UserComment ImageSrc="4.jpg" text={CommentBlog2} />
        <UserComment ImageSrc="12.png" text={SingleBlogParagraphs} />
        <UserComment ImageSrc="14.png" text={SingleBlogParagraphs} />
      </ul>
    </section>
  );
};

export default CommentSection;
