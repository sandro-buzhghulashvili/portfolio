import Projects2 from '../components/Projects';
import { PROJECTS } from '../assets/PROJECTS';

const ProjectsPage = () => {
  return (
    <div style={{ padding: '100px 0' }}>
      <Projects2
        projects={PROJECTS}
        disableTitle={true}
        projectCount={PROJECTS.length}
      />
    </div>
  );
};

export default ProjectsPage;
