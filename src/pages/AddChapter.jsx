import Ckeditor from "../components/Inputs/CKEditor";
import TextInput from "../components/Inputs/TextInput";
import Layout from "./Layout";

export default function AddChapter() {
  return (
    <Layout>
      <div className="border-2 rounded-xl p-4">
        <form action="" className="flex flex-col gap-y-4">
          <div className="w-full">
            <TextInput text={"Title"} />
          </div>
          <div className="w-full">
            <Ckeditor />
          </div>
        </form>
      </div>
      <div className="flex justify-end gap-x-4">
        <a
          href=""
          className="font-medium border border-slate-900 px-4 py-1 rounded-xl"
        >
          Cancel
        </a>
        <a
          href=""
          className="font-medium text-white bg-orange-500 rounded-xl py-2 px-4"
        >
          Save
        </a>
      </div>
    </Layout>
  );
}
