export default function FileInput({ text }) {
  return (
    <>
      <label className="block mb-2 text-sm font-medium" htmlFor="file_input">
        {text}
      </label>
      <input
        className="block p-1 w-full text-sm border border-gray-400 rounded-lg"
        id="file_input"
        type="file"
      />
    </>
  );
}
