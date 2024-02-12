"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

const ApexChart = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/Charts/ApexChart")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default ApexChart;
