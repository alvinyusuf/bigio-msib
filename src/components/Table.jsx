import { useEffect, useState } from "react";
import axios from "axios";

export default function Table() {
  const [data, setData] = useState([]);
  const getStories = async () => {
    await axios.get("http://127.0.0.1:5000/api/story").then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getStories();
  }, [data]);

  let i = 1;
  return (
    <div className="relative h-96 overflow-auto shadow-md border-2 rounded-xl p-2 text-sm">
      <table className="">
        <thead className="uppercase border-b-2">
          <tr>
            <th scope="col" className="px-2 py-1 w-10">
              No
            </th>
            <th scope="col" className="px-2 py-1 w-64">
              Title
            </th>
            <th scope="col" className="px-2 py-1 w-36">
              Author
            </th>
            <th scope="col" className="px-2 py-1 w-24">
              Category
            </th>
            <th scope="col" className="px-2 py-1 w-64">
              Tags
            </th>
            <th scope="col" className="px-2 py-1 w-24">
              Status
            </th>
            <th scope="col" className="px-2 py-1 w-24">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, key) => (
            <tr key={key} className="border-b-2 text-center">
              <td className="px-2 py-1 w-10">{i++}</td>
              <td className="px-2 py-1 w-64">{d.title}</td>
              <td className="px-2 py-1 w-36">{d.author}</td>
              <td className="px-2 py-1 w-24">{d.category}</td>
              <td className="px-2 py-1 w-64">
                <div className="flex flex-wrap justify-center gap-1">
                  {d.tags.map((tag, key) => (
                    <p
                      key={key}
                      className="bg-slate-200 rounded-full px-2 py-1"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </td>
              <td className="px-2 py-1 w-24">
                <p
                  className={`${
                    d.status == "publish" ? "bg-green-300" : "bg-red-300"
                  } rounded-full px-3 py-1`}
                >
                  {d.status}
                </p>
              </td>
              <td className="px-2 py-1 w-24">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
