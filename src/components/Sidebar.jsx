import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const navigations = [
    {
      text: "Dashboard",
      icon: MdDashboard,
      path: "/dashboard",
    },
    {
      text: "Story Management",
      icon: IoLibrary,
      path: "/",
    }
  ];

  return (
    <>
      <div className="flex justify-center">
        <p className="font-bold text-2xl text-blue-400">
          StoryKu
        </p>
      </div>
      <ul className="space-y-2">
        {navigations.map((navigation, key) => {
          return (
            <li key={key}>
              <a
                href={navigation.path}
                className={`flex items-center p-2 px-10 font-bold text-sm gap-x-1 ${active === navigation.path ? 'bg-blue-200' : ''}`}
                onClick={() => setActive(navigation.path)}
              >
                {<navigation.icon />}
                {navigation.text}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
