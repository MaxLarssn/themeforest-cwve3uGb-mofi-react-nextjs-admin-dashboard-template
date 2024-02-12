import { ClassPrefix, CollapsedBreakpoints, GridBehavior, HorizontalAllTimes, MaxContainerWidth } from "@/Constant";
import { ClassPrefixData, ContainerWidth, RestGrid } from "@/Data/Uikits/grid";

export const GridOptionTableBody = () => {
  return (
    <tbody>
      <tr>
        <th className="text-nowrap" scope="row">{GridBehavior}</th>
        <td>{HorizontalAllTimes}</td>
        <td colSpan={5}>{CollapsedBreakpoints}</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{MaxContainerWidth}</th>
        {ContainerWidth.map((item, index) => (
          <td key={index}>{item}</td>
        ))}
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{ClassPrefix}</th>
        {ClassPrefixData.map((item, index) => (
          <td key={index}><code>{item}</code></td>
        ))}
      </tr>
      {RestGrid.map(({ title, td }, index) => (
        <tr key={index}>
          <th className="text-nowrap" scope="row">{title}</th>
          <td colSpan={6}>{td}</td>
        </tr>
      ))}
    </tbody>
  );
};
