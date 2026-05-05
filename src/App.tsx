import { HeroChart } from "./components/HeroChart";
import { ModeToggle } from "./components/ModeToggle";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-7 h-full p-12">
      <div className="flex justify-center items-center flex-col gap-10">
        <div className="flex flex-col items-center">
          <h1 className="text-center font-heading text-7xl">
            Welcome To <span className="text-teal-500">Tracki'n</span>
          </h1>
          <p className="mt-3 opacity-70">
            A job application tracker with stats and charts
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-20">
            <Button className="w-28">Get Started</Button>
            <Button variant="secondary" className="w-28">
              Login
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-7">
        <Card>
          <CardHeader>
            <CardTitle>Kanban of job applications 👈</CardTitle>
            <CardDescription>
              Manage your job applications by a simple{" "}
              <span className="text-teal-500">Drag & Drop</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardContent className="grid grid-cols-4 gap-7">
              <Card className="p-3 text-center">
                <CardTitle>Offer</CardTitle>
              </Card>
              <Card className="p-3 text-center">
                <CardTitle>Applied</CardTitle>
              </Card>
              <Card className="p-3 text-center">
                <CardTitle>Interview</CardTitle>
              </Card>
              <Card className="p-3 text-center">
                <CardTitle>Rejected</CardTitle>
              </Card>
            </CardContent>
          </CardContent>
        </Card>
        <HeroChart />
      </div>
    </section>
  );
}

export default App;
