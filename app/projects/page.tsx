import PageHeader from "@/components/common/PageHeader";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
export default function projects() {
  return (
    <div>
      <PageHeader
              label="PROJECTS"
              title="From Vision to Reality"
              subtitle="At Vision, we don’t just build spaces — we build lasting relationships.."
              backgroundImage="/Titanium.jpg"
            />
      <ProjectsGrid />
    </div>
  );
}
