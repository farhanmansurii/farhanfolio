

export interface Project {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  color: string;
  image: string;
  image2: string;
  image3: string;
  isFeatured: boolean,
  github: string;
  liveLinks: string;
  techStack: string;
  slug: string;
}
async function getData() {
  const res = await fetch('https://foliobackend.vercel.app/works/', { next: { revalidate: 60 } });
  return res.json();
}
async function getSingleProject(id: string): Promise<Project> {
  const res = await fetch(`https://foliobackend.vercel.app/works/${id}`, { next: { revalidate: 60 } });
  return res.json();
}

export { getSingleProject, getData };
