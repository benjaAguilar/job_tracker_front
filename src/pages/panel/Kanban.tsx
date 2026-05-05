import { KanbanCard } from "@/components/ui/KanbanCard";

export function Kanban() {
  return (
    <section className="grid grid-cols-[280px_1fr] h-full ">
      <div className="border-r-2 shadow bg-gray-200 h-full ">
        <h1>Panel</h1>
      </div>
      <div className="grid grid-cols-4 gap-3 p-7">
        <KanbanCard title="Offer" />
        <KanbanCard title="Applied" />
        <KanbanCard title="Interview" />
        <KanbanCard title="Rejected" />
      </div>
    </section>
  );
}
