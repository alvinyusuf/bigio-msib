import { useRef, useEffect, useState } from "react";
import Tagify from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css";

export default function TagInput({ text }) {
  const inputElement = useRef();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (inputElement.current) {
      const tagify = new Tagify(inputElement.current);
      tagify.on('change', onChange);
    }
  }, []);

  const onChange = (e) => {
    const value = e.detail.value;
    setTags(value);
  };

  return (
    <div>
      <label htmlFor={text} className="block mb-2 text-sm font-medium">
        {text}
      </label>
      <input
        type="text"
        id={text}
        ref={inputElement}
        className="border border-gray-400 text-sm rounded-lg block w-full p-2"
        placeholder={text}
      />
    </div>
  );
}
