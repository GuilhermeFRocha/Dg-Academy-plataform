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
  console.log(props);

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <div
        className={`rounded border border-gray-400 p-4 mt-2 group-hover:border-purpple-400 ${
          isActive ? "bg-purpple-800" : ""
        }`}
        style={{ transition: "all 2s", transform: "revert-layer" }}
      >
        <header className="flex items-center justify-between"></header>
        <strong
          className={`text-gray-100 block ${isActive ? "text-white-100" : ""}`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
