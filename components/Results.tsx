import React, { FC } from "react";
import { ContentType } from "../pages";
import Thumbnail from "./Thumbnail";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { useRouter } from "next/dist/client/router";

const Results: FC<{ results: ContentType[] }> = ({ results }) => {
  const router = useRouter();
  const passMedia = results as any;
  const media = router.query.media_type || passMedia.media_type;

  return (
    <div className="flex flex-col align-center ">
      <div className="px-5 my-10 hidden 2xl:block">
        <ResponsiveContainer width="100%" aspect={4}>
          <BarChart
            width={500}
            height={300}
            data={results}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={true}
            />
            <XAxis dataKey={media === "movie" ? "title" : "name"} />
            <YAxis />
            <Tooltip cursor={{ fill: "rgba(206, 206, 206, 0.2)" }} />
            <Bar dataKey="vote_average" fill="#66aa33" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  3xl:flex flex-wrap justify-center">
        {results.map((result: any) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Results;
