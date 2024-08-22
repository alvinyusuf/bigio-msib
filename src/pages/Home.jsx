import { MdOutlineFilterAlt } from "react-icons/md";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import SelectInput from "../components/Inputs/SelectInput";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

export default function Home() {
  const optionsCat = [
    {
      text: "Horror",
      value: "horror",
    },
    {
      text: "Self Development",
      value: "self-dev",
    },
    {
      text: "Romance",
      value: "romance",
    },
  ];

  const optionsStat = [
    {
      text: "Publish",
      value: "publis",
    },
    {
      text: "Draft",
      value: "draft",
    },
  ];

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
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className="flex justify-center items-center"
                onClick={() => document.getElementById("search_filter").showModal()}
              >
                <MdOutlineFilterAlt size={30} />
              </button>
              <a
                href="/add-story"
                className="px-4 py-2 bg-orange-500 font-medium text-white rounded-xl"
              >
                + Add Story
              </a>
            </div>
          </div>
          <Table />
        </div>
      </div>

      <dialog id="search_filter" className="modal border-2 p-4 rounded-xl w-96">
        <div className="modal-box space-y-10">
          <h3 className="font-bold text-lg">Filter</h3>
          <form action="" className="space-y-10">
            <div className="w-full">
              <SelectInput text={"Category"} options={optionsCat} />
            </div>
            <div className="w-full">
              <SelectInput text={"Status"} options={optionsStat} />
            </div>
            <div className="flex justify-between">
              <button type="reset" className="px-4 py-2 rounded-xl border-2">Reset</button>
              <div className="flex gap-x-4">
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn px-4 py-2 rounded-xl border-2">Close</button>
                  </form>
                </div>
                <button type="submit" className="text-white px-4 py-2 rounded-xl bg-orange-500">Filter</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
