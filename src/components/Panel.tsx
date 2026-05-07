import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

export function Panel() {
  return (
    <div className="border-r-2 shadow bg-(--panel) h-full p-5 flex flex-col items-center gap-7">
      <a href="/" className="font-heading text-4xl">
        Tracki'n
      </a>
      <div className="flex items-center justify-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">👤 jondoe@gmail.com ⬇</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
      <Separator />
      <ul className="flex flex-col w-full">
        <li className="w-full">
          <a
            href="/panel/stadistics"
            className="block w-full p-2 rounded-md hover:bg-accent"
          >
            Stadistics 📈
          </a>
        </li>

        <li>
          <a
            href="/panel/job_track"
            className="block w-full p-2 rounded-md hover:bg-accent"
          >
            Job Tracker 💼
          </a>
        </li>
      </ul>
      <Button className="w-full mt-auto">New Application</Button>
    </div>
  );
}
