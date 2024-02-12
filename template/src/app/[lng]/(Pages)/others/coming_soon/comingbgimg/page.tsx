"use client";
import CommingSoonBgImageContainer from "@/Components/Other/ComingSoon/CommingSoonBgImage";
import React, { FunctionComponent, useEffect, useState } from "react";

const CommingSoonBgImage = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/Other/ComingSoon/CommingSoonBgImage")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default CommingSoonBgImage;
