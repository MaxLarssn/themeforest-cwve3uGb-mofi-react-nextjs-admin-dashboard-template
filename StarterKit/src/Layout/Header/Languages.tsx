import { LanguagesData } from "@/Data/Layout";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setLanguage } from "@/Redux/Reducers/LanguageSlice";
import { ChangeLngType } from "@/Types/LayoutTypes";
import { useTranslation } from "@/app/i18n/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Languages = () => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const { i18n } = useTranslation(i18LangStatus);

  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const changeLng = (item:ChangeLngType) => {
    dispatch(setLanguage(item.data));
    i18n.changeLanguage(item.language);
    const languageCodeRegex = /^\/[a-z]{2}(\/|$)/;
    const updatedPath = pathname.replace(languageCodeRegex, `/${item.data}$1`);
    router.push(updatedPath);
  };

  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length > 0) {
      const language = pathSegments[0];
      if (language !== i18LangStatus) {
        dispatch(setLanguage(language));
      }
    }
  }, []);

  return (
    <li className="onhover-dropdown">
      <div className="cart-box text-uppercase f-w-700">{i18LangStatus}</div>
      <div className="language-dropdown onhover-show-div language-width">
        <ul className="language-list">
          {LanguagesData.map((item, i) => (
            <li className="p-0" key={i} onClick={() => {changeLng(item)}}>
              <a className="text-decoration-none" data-lng={item.data}>
                <i className={item.logo} /> {item.language}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Languages;
