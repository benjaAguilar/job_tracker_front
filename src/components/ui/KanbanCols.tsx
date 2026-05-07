import { useDroppable } from "@dnd-kit/react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { DialogJobForm } from "./DialogJobForm";
import { type ReactNode } from "react";
import { CollisionPriority } from "@dnd-kit/abstract";

interface KanbanColsType {
  title: string;
  id: string;
  children: ReactNode;
}

export function KanbanCols({ id, title, children }: KanbanColsType) {
  const { isDropTarget, ref } = useDroppable({
    id,
    type: "column",
    accept: "item",
    collisionPriority: CollisionPriority.Normal,
  });

  const style = isDropTarget ? "border-[#00bba790]" : "";

  return (
    <Card
      className={`p-3 text-center bg-transparent border-2 ${style}`}
      ref={ref}
    >
      <CardHeader className="rounded-md bg-[#00bba770] p-1 grid grid-cols-[1fr_auto] justify-center items-center">
        <CardTitle className="text-xl">{title}</CardTitle>
        <DialogJobForm title={title} />
      </CardHeader>
      <CardContent className="flex flex-col gap-2 size-full">
        {children}
      </CardContent>
    </Card>
  );
}
