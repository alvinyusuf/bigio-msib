import SelectInput from "../components/Inputs/SelectInput";
import TagInput from "../components/Inputs/TagInput";
import TextareaInput from "../components/Inputs/TextareaInput";
import TextInput from "../components/Inputs/TextInput";
import FileInput from "../components/Inputs/FileInput";
import Layout from "./Layout";

export default function AddStory() {
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
    <Layout>
      <div className="border-2 rounded-xl p-4">
        <form action="" className="flex flex-col gap-y-4">
          <div className="flex gap-x-16">
            <div className="w-full">
              <TextInput text={"Title"} />
            </div>
            <div className="w-full">
              <TextInput text={"Author"} />
            </div>
          </div>
          <div className="w-full">
            <TextareaInput text={"Synopsis"} />
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-16">
              <div className="w-full">
                <SelectInput text={"Category"} options={optionsCat} />
              </div>
              <div className="w-full">
                <TagInput text={"Tags"} />
              </div>
            </div>
            <div className="flex gap-x-16">
              <div className="w-full">
                <FileInput text={"Cover Image"} />
              </div>
              <div className="w-full">
                <SelectInput text={"Status"} options={optionsStat} />
              </div>
            </div>
            <div className="flex justify-end">
              <a href="" className="font-medium text-white bg-orange-500 rounded-xl p-2">
                + Add Chapter
              </a>
            </div>
            <div className="w-full">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase border-b-2">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Modified
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="px-6 py-4">Old Title</td>
                    <td className="px-6 py-4">8.45 21/8/2024</td>
                  </tr> 
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end gap-x-4">
        <a href="" className="font-medium border border-slate-900 px-4 py-1 rounded-xl">Cancel</a>
        <a href="" className="font-medium text-white bg-orange-500 rounded-xl py-2 px-4">Save</a>
      </div>
    </Layout>
  );
}
