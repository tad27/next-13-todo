import AddTask from "./components/AddTask";

export default function Home() {
  return (
    <section>
      <h1 className="text-2xl">My To Dos</h1>
      <AddTask />
    </section>
  );
}
