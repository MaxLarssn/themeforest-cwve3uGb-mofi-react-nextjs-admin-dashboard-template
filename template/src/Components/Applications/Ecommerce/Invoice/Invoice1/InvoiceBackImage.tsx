import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";

const InvoiceBackImage = () => {
  return (
    <td className="bg-img-cover">
      <RatioImage className="banner-image w-100" src={`${ImagePath}/email-template/invoice-1/1.png`} alt="background"/>
    </td>
  );
};

export default InvoiceBackImage;
