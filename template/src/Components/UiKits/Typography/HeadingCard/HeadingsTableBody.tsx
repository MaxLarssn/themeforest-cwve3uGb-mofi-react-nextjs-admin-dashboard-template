import { Heading } from "@/Constant";
import React from "react";

export const HeadingsTableBody = () => {
  return (
    <tbody>
      <tr>
        <td><code>&lt;h1&gt;&lt;/h1&gt;</code></td>
        <td><h1 className="m-0">1.875rem</h1></td>
        <td><h1 className="m-0"><span> {Heading} 1 (MEGA)</span></h1></td>
      </tr>
      <tr>
        <td><code>&lt;h2&gt;&lt;/h2&gt;</code></td>
        <td><h2 className="mb-0">1.625rem</h2></td>
        <td><h2><span> {Heading} 2 (XL)</span></h2></td>
      </tr>
      <tr>
        <td><code>&lt;h3&gt;&lt;/h3&gt;</code></td>
        <td><h3 className="mb-0">1.375rem</h3></td>
        <td><h3><span> {Heading} 3 (LARGE)</span></h3></td>
      </tr>
      <tr>
        <td><code>&lt;h4&gt;&lt;/h4&gt;</code></td>
        <td><h4 className="mb-0">1.25rem</h4></td>
        <td><h4><span> {Heading} 4 (MEDIUM)</span></h4></td>
      </tr>
      <tr>
        <td><code>&lt;h5&gt;&lt;/h5&gt;</code></td>
        <td><h5 className="mb-0">1rem</h5></td>
        <td><h5><span> {Heading} 5 (SMALL)</span></h5></td>
      </tr>
      <tr>
        <td className="pb-0"><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
        <td className="pb-0"><h6 className="mb-0">0.875rem</h6></td>
        <td className="pb-0"><h5><span> {Heading} 6 </span></h5></td>
      </tr>
    </tbody>
  );
};
