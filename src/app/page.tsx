"use client";
import Image from "next/image";
import useSWR from "swr";
import { useAuth } from "@clerk/nextjs";
import useClerkSWR from "../../hook";

export default function Home() {
  return <div className="bg-blue"></div>;
}

function DisplayFinancialInsights() {
  return (
    <div>
      <div>My Financial Insights</div>
      <div>
        <button>add</button>
        <button>search</button>
        <button>manage</button>
      </div>
    </div>
  );
}
