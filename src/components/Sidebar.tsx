import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import { useEffect, useState } from "react";
import "../styles/style.css";
import { Arrow } from "../styles/sidebar";

export function Sidebar() {
  const { data } = useGetLessonsQuery();
  const [isOpen, setIsOpen] = useState(false);
  const [dados, setDados] = useState<any>("cl4o517xx0mm40blynjhcsr4e");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const lesson = data?.lessons.filter((item) => item.teacher.id === dados);
  const lessonTwo = data?.lessons.filter((item) => item.teacher.id !== dados);

  return (
    <aside className="w-[348px] bg-dark-400 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block text-white-200">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        <>
          <button
            className="btn btn-secondary dropdown-toggle"
            onClick={toggleDropdown}
          >
            <div className="bg-dark-600 h-full p-3 rounded flex items-center justify-between text-gray-100 font-bold">
              Introduçao HTML
              <Arrow className={!isOpen ? "rotated" : ""} size={28} />
            </div>
          </button>

          <>
            {!isOpen &&
              lesson?.map((iee) => (
                <div className={`${isOpen && "show"}`}>
                  <Lesson
                    key={iee.id}
                    title={iee.title}
                    slug={iee.slug}
                    availableAt={new Date(iee.availableAt)}
                    type={iee.lessonType}
                  />
                </div>
              ))}
          </>

          <button className="btn btn-secondary dropdown-toggle">
            <div className="bg-dark-600 h-full p-3 rounded flex items-center justify-between text-gray-100 font-bold">
              Introduçao CSS
              <Arrow className={!isOpen ? "rotated" : ""} size={28} />
            </div>
          </button>

          {lessonTwo?.map((ids) => (
            <div>
              <Lesson
                key={ids.id}
                title={ids.title}
                slug={ids.slug}
                availableAt={new Date(ids.availableAt)}
                type={ids.lessonType}
              />
            </div>
          ))}
          <></>
        </>
      </div>
    </aside>
  );
}
