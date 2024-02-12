import { Blockquotes } from "@/Data/Uikits/typography";

export const DynamicBlockquotes = () => {
  return (
    <>
      {Blockquotes.map(({ text, name, className, color }, index) => (
        <div className={`figure text-${className} d-block dark-blockquote`} key={index}>
          <blockquote className={`blockquote light-card mb-2 bg-light-${color}`}>
            <p className={`mb-0 txt-${color}`}>{text}</p>
            <span className="blockquote-footer pt-3">{name}</span>
          </blockquote>
        </div>
      ))}
    </>
  );
};
