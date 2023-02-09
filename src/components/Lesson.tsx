import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const avaliableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'K'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActive = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-150">{avaliableDateFormatted}</span>
      <div
        className={`rounded border border-gray-400 p-4 mt-2 group-hover:border-purpple-400 ${
          isActive ? "bg-purpple-800" : ""
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`text-sm  font-medium flex items-center gap-2  ${
                isActive ? "text-white-100" : ""
              }`}
            >
              <CheckCircle size={20} />
              Conteudo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={`text-xs rounded py-[0.125rem] px-2 border border-purpple-400 font-bold  ${
              isActive ? "text-white-100" : ""
            }`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>
        <strong
          className={`text-gray-100 mt-5 block ${
            isActive ? "text-white-100" : ""
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
