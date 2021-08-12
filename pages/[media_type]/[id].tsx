import { LinkIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React, { FC } from "react";
import { ContentType } from "..";
import { fullDate } from "../../utils/helpers";

const Details: FC<{ data: ContentType }> = ({ data }) => {
  console.log(data);
  return (
    <div className="p-10 flex flex-wrap sm:flex-nowrap justify-center">
      <div className="flex-none w-60 relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt={`${data.title || data.name} image`}
          className="absolute w-full h-full object-cover rounded-xl"
          layout="responsive"
          height={1920}
          width={1080}
        />
        <p className="text-center bg-green-600 rounded-lg mt-2 ">
          {data.tagline}
        </p>
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-xl font-semibold">
            {data.title || data.name}
          </h1>
          <div className="text-xl font-semibold text-gray-500 flex">
            <ThumbUpIcon className="h-5 mx-2" /> {data.vote_count}
          </div>
          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2 flex justify-between">
            <div>
              Release date: {fullDate(data.release_date || data.first_air_date)}
            </div>
            <a href={`${data.homepage}`} target="_blank" rel="noreferrer">
              <LinkIcon className="h-5 mx-2 cursor-pointer" />
            </a>
          </div>
          <p className="w-full">{data.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const media_type = context.query.media_type as string;
  const id = context.query.id as string;
  const data = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  ).then((res) => res.json());
  return {
    props: {
      data,
    },
  };
};
