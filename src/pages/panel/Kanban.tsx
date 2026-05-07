import { JobCard } from "@/components/ui/JobCard";
import { KanbanCols } from "@/components/ui/KanbanCols";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import { useState } from "react";
import { Panel } from "@/components/Panel";

export function Kanban() {
  const [itemsInCols, setItemsInCols] = useState({
    Offer: ["a1"],
    Applied: ["b2"],
    Interview: ["c1", "c2"],
    Rejected: [],
  });

  return (
    <section className="grid grid-cols-[280px_1fr] h-full">
      <Panel />
      <DragDropProvider
        onDragOver={(event) => {
          setItemsInCols((items) => move(items, event));
        }}
      >
        <div className="grid grid-cols-4 gap-3 p-7">
          {Object.entries(itemsInCols).map(([col, items]) => (
            <KanbanCols key={col} id={col} title={col}>
              {items.map((item, index) => (
                <JobCard id={item} key={item} index={index} column={col} />
              ))}
            </KanbanCols>
          ))}
        </div>
      </DragDropProvider>
    </section>
  );
}
