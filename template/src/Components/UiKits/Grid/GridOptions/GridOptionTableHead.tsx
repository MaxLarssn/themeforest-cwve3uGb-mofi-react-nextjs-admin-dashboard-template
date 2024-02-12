import { GridOptionHeader } from "@/Data/Uikits/grid";

export const GridOptionTableHead = () => {
  return (
    <thead>
      <tr>
        <th></th>
        <th className="text-center">Extra small<br />
          <small>&lt;576px</small>
        </th>
        {GridOptionHeader.map(({ title, small, className }, index) => (
          <th className="text-center" key={index}>{title}
            <br />
            <small className={className ? className : ""}>{small}</small>
          </th>
        ))}
      </tr>
    </thead>
  );
};
