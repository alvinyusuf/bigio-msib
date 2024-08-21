export default function TextareaInput({ text }) {
  return (
    <>
      <label htmlFor={text} className="block mb-2 text-sm font-medium">
        {text}
      </label>
      <textarea
        id={text}
        rows="4"
        className="block p-2 w-full text-sm rounded-lg border border-gray-400 resize-none"
        placeholder={text}
      ></textarea>
    </>
  );
}
