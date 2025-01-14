import AddClientModal from "../components/AddClient";
import Clients from "../components/Client";
import Projects from "../components/Projects";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
