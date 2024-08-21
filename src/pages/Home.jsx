import { MdOutlineFilterAlt } from "react-icons/md";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

export default function Home() {
  return (
    <div className="flex">
      <div className="border-r-2 w-60 py-8 space-y-4">
        <Sidebar />
      </div>
      <div className=" flex flex-1 flex-col p-6 gap-y-12">
        <Header text={"Stories"} />
        <div id="content" className="h-full space-y-4">
          <div id="tools" className="flex justify-between px-6">
            <SearchInput />
            <div id="filter" className="flex justify-between w-40">
              <button className="flex justify-center items-center">
                <MdOutlineFilterAlt size={30} />
              </button>
              <a href="/add-story" className="px-4 py-2 bg-orange-500 font-medium text-white rounded-xl">+ Add Story</a>
            </div>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
}
