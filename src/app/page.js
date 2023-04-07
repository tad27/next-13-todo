import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <section>
      <h1 className="text-2xl text-center font-bold">My To Dos</h1>
      <AddTask />
      <TaskList />
    </section>
  );
}
