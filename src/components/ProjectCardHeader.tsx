import { IProjectInfo } from "../interfaces/IProjectInfo";

interface IProjectCardHeader {
  project: IProjectInfo;
}

const ProjectCardHeader: React.FC<IProjectCardHeader> = (props) => {
  const { project } = props;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h1 className="m-0 text-2xl">
        {project.link ? <a href={project.link}>{project.name}</a> : project.name}
      </h1>
      {project.key && project.key.trim() !== "" && process.env.REACT_APP_PROJECT_UPDATE_URL && (
        <a
          className="update-project bg-transparent !bg-none hover:bg-gltf-green font-semibold hover:text-white py-2 px-4 border border-slate-300 hover:border-transparent rounded"
          href={process.env.REACT_APP_PROJECT_UPDATE_URL + project.key}
        >
          Update Project
        </a>
      )}
    </div>
  );
};

export default ProjectCardHeader;
