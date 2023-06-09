import PersonalNavbar from "./usernavbar/user-navbar";
import PersonalInfo from "./descriptions";
import { user } from "@/src/constants/user";
import { useState } from "react";

const UserDetails = () => {
  const [about, setAbout] = useState(true);
  const [experience, setExperience] = useState(false);
  const [projects, setProjects] = useState(false);
  return (
    <main className="grid grid-cols-[500px,1fr] h-full items-center relative">
        <PersonalNavbar about={about} experience={experience} projects={projects} setAbout={setAbout} setExperience={setExperience} setProjects={setProjects}/>
        <PersonalInfo about={about} experience={experience} projects={projects} data={user} />
    </main>
  )
};

export default UserDetails;
