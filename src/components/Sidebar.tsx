import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import { useState } from "react";
import "../styles/style.css";
import { Arrow } from "../styles/sidebar";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  const idsToFilter = data?.lessons.map((les) => les.module?.id);

  const filteredLessons = data?.lessons.filter((it) =>
    idsToFilter?.includes(it.module?.id)
  );

  const [isHtmlOpen, setIsHtmlOpen] = useState(true);
  const [isCssOpen, setIsCssOpen] = useState(false);

  const toggleHtml = () => {
    setIsHtmlOpen(!isHtmlOpen);
  };

  const toggleCss = () => {
    setIsCssOpen(!isCssOpen);
  };

  const namesModules = data?.lessons.map((modules) => modules.module?.name_id);

  return (
    <aside className="w-[348px] bg-dark-400 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block text-white-200">
        Cronograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        <div className="grid gap-8">
          <button
            className="btn btn-secondary dropdown-toggle w-full"
            onClick={toggleHtml}
          >
            <div className="bg-dark-600 h-full p-3 rounded flex items-center justify-between text-gray-100 font-bold">
              <p>{namesModules && "Introdução HTML"}</p>
              <Arrow className={!isHtmlOpen ? "rotated" : ""} size={28} />
            </div>
          </button>

          {isHtmlOpen &&
            filteredLessons?.map((lesson) => {
              if (lesson.module?.id === idsToFilter[0]) {
                return (
                  <div className="show">
                    <Lesson
                      key={lesson.id}
                      title={lesson.title}
                      slug={lesson.slug}
                      availableAt={new Date(lesson.availableAt)}
                      type={lesson.lessonType}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}

          <button
            className="btn btn-secondary dropdown-toggle w-full"
            onClick={toggleCss}
          >
            <div className="bg-dark-600 h-full p-3 rounded flex items-center justify-between text-gray-100 font-bold">
              {namesModules && "Introdução CSS"}
              <Arrow className={!isCssOpen ? "rotated" : ""} size={28} />
            </div>
          </button>

          {isCssOpen &&
            filteredLessons?.map((lesson) => {
              if (lesson.module?.id === idsToFilter[1]) {
                return (
                  <div className="show">
                    <Lesson
                      key={lesson.id}
                      title={lesson.title}
                      slug={lesson.slug}
                      availableAt={new Date(lesson.availableAt)}
                      type={lesson.lessonType}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </aside>
  );
}
