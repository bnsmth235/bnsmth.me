import React, { useEffect, useState } from "react";
import rightIcon from "../../assets/right.png";
import githubThumbnail from "../../assets/github-thumbnail.png";
import moffatIntelThumbnail from "../../assets/moffatintel-thumbnail.jpg";
import "./Projects.css"; 

const GITHUB_USERNAME = "bnsmth235";
const GITHUB_PAGE_SIZE = 100;

const getItemsPerPage = () => {
  if (window.innerWidth >= 1200) {
    return 3;
  }

  if (window.innerWidth >= 768) {
    return 2;
  }

  return 1;
};

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  archived: boolean;
  language: string | null;
};

type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
  source: "custom" | "github";
  order?: number;
};

const customProjects: Project[] = [
  {
    id: "moffatintel",
    title: "MoffatIntel",
    description: "End-to-end solution for managing construction projects. Ask me for a demo!",
    link: "https://www.moffatintel.com/",
    thumbnail: moffatIntelThumbnail,
    source: "custom",
    order: 1,
  },
  {
    id: "glaga",
    title: "Glaga",
    description: "The first game I've ever \"coded\" back in middle school. It's a clone of the classic game Galaga, built using Scratch. Check it out and relive the nostalgia!",
    link: "https://scratch.mit.edu/projects/22111988",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/22111988_480x360.png",
    source: "custom",
    order: -1,
  }
];

const insertProjectAtOrder = (projects: Project[], project: Project, order: number) => {
  const insertIndex = Math.min(Math.max(order - 1, 0), projects.length);

  projects.splice(insertIndex, 0, project);
};

const getRepoThumbnail = (repoName: string, repoId: number) =>
  `https://opengraph.githubassets.com/${repoId}/${GITHUB_USERNAME}/${encodeURIComponent(repoName)}`;

const getProjectDescription = (repo: GithubRepo) => {
  if (repo.description) {
    return repo.description;
  }

  const fallbackParts = [];

  if (repo.language) {
    fallbackParts.push(repo.language);
  }

  if (repo.archived) {
    fallbackParts.push("Archived");
  }

  fallbackParts.push("Public GitHub repository");

  return fallbackParts.join(" • ");
};

const fetchPublicRepos = async (): Promise<Project[]> => {
  const repos: GithubRepo[] = [];
  let page = 1;

  while (true) {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${GITHUB_PAGE_SIZE}&page=${page}`
    );

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }

    const currentPage: GithubRepo[] = await response.json();
    repos.push(...currentPage);

    if (currentPage.length < GITHUB_PAGE_SIZE) {
      break;
    }

    page += 1;
  }

  return repos.map((repo) => ({
    id: `github-${repo.id}`,
    title: repo.name,
    description: getProjectDescription(repo),
    link: repo.html_url,
    thumbnail: getRepoThumbnail(repo.name, repo.id),
    source: "github",
  }));
};

const Projects: React.FC = () => {
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [projectsError, setProjectsError] = useState<string | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const loadProjects = async () => {
      try {
        setProjectsError(null);
        const publicRepos = await fetchPublicRepos();

        if (!isCancelled) {
          setGithubProjects(publicRepos);
        }
      } catch {
        if (!isCancelled) {
          setProjectsError("Unable to load public GitHub repositories right now.");
        }
      } finally {
        if (!isCancelled) {
          setIsLoadingProjects(false);
        }
      }
    };

    loadProjects();

    return () => {
      isCancelled = true;
    };
  }, []);

  const customProjectLinks = new Set(customProjects.map((project) => project.link));
  const filteredGithubProjects = githubProjects.filter((project) => !customProjectLinks.has(project.link));

  const orderedCustomProjects = customProjects
    .filter((project) => typeof project.order === "number" && project.order > 0)
    .sort((left, right) => (left.order ?? 0) - (right.order ?? 0));

  const unorderedCustomProjects = customProjects.filter((project) => project.order === undefined);
  const trailingCustomProjects = customProjects.filter((project) => project.order === -1);

  const projects = [...filteredGithubProjects];

  orderedCustomProjects.forEach((project) => {
    insertProjectAtOrder(projects, project, project.order!);
  });

  unorderedCustomProjects.forEach((project) => {
    projects.push(project);
  });

  trailingCustomProjects.forEach((project) => {
    projects.push(project);
  });
  const totalPages = Math.max(1, Math.ceil(projects.length / itemsPerPage));
  const pagedProjects = Array.from({ length: totalPages }, (_, pageIndex) => {
    const startIndex = pageIndex * itemsPerPage;

    return projects.slice(startIndex, startIndex + itemsPerPage);
  });

  useEffect(() => {
    setCurrentPage((previousPage) => Math.min(previousPage, totalPages));
  }, [totalPages]);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPages));
  };

  return (
    <div className="w-full p-4 md:p-8 text-black">
      <h2 className="text-3xl md:text-6xl font-bold mb-16 urbanist-bold ml-10">Let's take a look at my<br/><span className="text-[#69aadf]">Portfolio</span></h2>
      {isLoadingProjects ? (
        <p className="ml-10 text-lg italic text-gray-600">Loading public GitHub repositories...</p>
      ) : null}
      {projectsError ? (
        <p className="ml-10 text-lg italic text-gray-600">{projectsError}</p>
      ) : null}
      {!isLoadingProjects && !projectsError && projects.length === 0 ? (
        <p className="ml-10 text-lg italic text-gray-600">No public GitHub repositories found.</p>
      ) : null}
      {projects.length > 0 ? (
        <div className="projects-gallery w-9/10 mx-auto">
          <div className="projects-slider-window" aria-live="polite">
            <div
              className="projects-slider-track"
              style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}
            >
              {pagedProjects.map((pageProjects, pageIndex) => (
                <div key={pageIndex} className="projects-slide">
                  <div className="projects-grid">
                    {pageProjects.map((project) => (
                      <div
                        key={project.id}
                        className={`project-card ${project.source === "github" ? "project-card-github" : "project-card-custom"}`}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                          <div className="project-image-container">
                            <img
                              src={project.thumbnail}
                              alt={`${project.title} Thumbnail`}
                              className="project-image rounded-lg"
                              onError={(event) => {
                                event.currentTarget.src = githubThumbnail;
                              }}
                            />
                          </div>

                          {project.source === "custom" ? (
                            <div className="project-info project-info-overlay">
                              <div>
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-base italic">{project.description}</p>
                              </div>
                              <div className="project-link-container">
                                <img src={rightIcon} alt="View Project" className="project-arrow" style={{ filter: "invert(100%)" }} />
                              </div>
                            </div>
                          ) : null}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {totalPages > 1 ? (
            <div className="projects-pagination-controls">
              <button
                type="button"
                className="projects-page-button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Go to previous page"
              >
                <img src={rightIcon} alt="" className="projects-nav-arrow projects-nav-arrow-left" />
              </button>

              <div className="projects-pagination-dots">
                <span
                  className="projects-pagination-indicator"
                  aria-hidden="true"
                  style={{ transform: `translateX(calc(${currentPage - 1} * (0.8rem + 0.5rem)))` }}
                />
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;

                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      className={`projects-pagination-dot ${pageNumber === currentPage ? "active" : ""}`}
                      onClick={() => goToPage(pageNumber)}
                      aria-label={`Go to page ${pageNumber}`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                className="projects-page-button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Go to next page"
              >
                <img src={rightIcon} alt="" className="projects-nav-arrow" />
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Projects;
