import { Card, CardHeader, CardTitle } from "./card";
import { DialogJobForm } from "./DialogJobForm";

export interface KanbanCardTypes {
  title: string;
}

export function KanbanCard({ title }: KanbanCardTypes) {
  return (
    <Card className="p-3 text-center bg-transparent">
      <CardHeader className="rounded-md bg-[#00bba770] p-1 grid grid-cols-[1fr_auto] justify-center items-center">
        <CardTitle className="text-xl">{title}</CardTitle>
        <DialogJobForm title={title} />
      </CardHeader>
    </Card>
  );
}
