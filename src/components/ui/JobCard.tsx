import { Card } from "./card";
import { useSortable } from "@dnd-kit/react/sortable";

interface JobCardTypes {
  id: string;
  index: number;
  column: string;
}

export function JobCard({ id, index, column }: JobCardTypes) {
  const { ref } = useSortable({
    id,
    index,
    type: "item",
    accept: "item",
    group: column,
  });

  return (
    <Card ref={ref}>
      <h1>DRAGGABLE ID: {id}</h1>
    </Card>
  );
}
