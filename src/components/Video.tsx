import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import axios from "axios";
import { useEffect, useState } from "react";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data:datas } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });
  const [duration, setDuration] = useState('');
  const VIDEO_ID = datas?.lesson?.videoId; // substitua pelo ID do vídeo do YouTube
  const API_KEY= "AIzaSyACsXn9pxEZdruNQusHIqI9Ero7uvLD-zQ"
 
  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&key=${API_KEY}&part=contentDetails`)
      .then(response => {
        const duration = response.data.items[0].contentDetails.duration;
        setDuration(duration);
      })
      .catch(error => console.log(error));
  }, [VIDEO_ID]);

 const match: any | null = duration.match(/PT(\d+)M(\d+)S/);

  

  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return <div className="flex-1">Loading...</div>;
  }
 // <p>{duration && (
   // `${match[1]} ${match[2]}`
  //  )}</p>

  return (
    <div className="flex-1 bg-dark-500">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto bg-dark-500">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-100">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-100 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-purpple-300"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl text-gray-100 block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-100 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://discord.gg/MNrTW8Js"
              target="_blank"
              className="p-4 text-sm bg-purpple-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-purpple-300 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>

            <a
              href={data.lesson.challenge.url}
              target="_blank"
              className="p-4 text-sm border border-purpple-300 text-purpple-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-purpple-500 hover:text-dark-100 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href=""
            className="bg-dark-400 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-1200 transition-colors"
          >
            <div className="bg-purpple-300 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl whitespace-nowrap">
                Material complementar
              </strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href=""
            className="bg-dark-400 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-1200 transition-colors"
          >
            <div className="bg-purpple-300 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wuallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
