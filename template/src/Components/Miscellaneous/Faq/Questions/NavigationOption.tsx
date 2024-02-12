import { AskOurCommunity, FaqContactUs, Href } from "@/Constant";
import { AskQuestionData } from "@/Data/Miscellaneous/Faq";
import Link from "next/link";
import { Mail, MessageCircle } from "react-feather";

const NavigationOption = () => {
  return (
    <div className="navigation-option">
      <ul>
        {AskQuestionData.map((item, i) => (
          <li className="border-0" key={i}>
            <Link href={Href}>{item.icon}{item.title}</Link>
            <span className={item.class}>{item.val}</span>
          </li>
        ))}
      </ul>
      <hr/>
      <ul>
        <li className="border-0"><Link href={Href}><Mail />{FaqContactUs}</Link></li>
        <li className="border-0"><Link href={Href}><MessageCircle />{AskOurCommunity}</Link></li>
      </ul>
    </div>
  );
};

export default NavigationOption;
