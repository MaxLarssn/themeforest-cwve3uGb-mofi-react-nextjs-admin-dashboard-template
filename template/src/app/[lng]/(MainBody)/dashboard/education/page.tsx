"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

const Education = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/General/Dashboard/Education")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default Education;
