"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSinit(config: AOS.AosOptions) {
  useEffect(() => {
    AOS.init(config);
  }, [config]);
  return <></>;
}