export default function TextInput({ text }) {
  return (
    <>
      <label htmlFor={text} className="block mb-2 text-sm font-medium">
        {text}
      </label>
      <input
        type="text"
        id={text}
        className="border border-gray-400 text-sm rounded-lg block w-full p-2"
        placeholder={text}
        required
      />
    </>
  );
}
