import { InvoiceHeaderData } from "@/Data/Application/Ecommerce";

const TableHeader = () => {
  return (
    <>
      {InvoiceHeaderData.map((data, i) => (
        <th style={{ padding: "18px 15px", textAlign: "left", border: "none" }} key={i}>
          <span style={{ color: "#fff", fontSize: 16 }}>{data}</span>
        </th>
      ))}
    </>
  );
};

export default TableHeader;
