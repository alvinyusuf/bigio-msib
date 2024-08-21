export default function SelectInput({ text, options }) {
  return (
    <>
      <label htmlFor={text} className="block mb-2 text-sm font-medium">
        {text}
      </label>
      <select
        id={text}
        className="border border-gray-400 text-sm rounded-lg block w-full p-2"
      >
        <option selected>Choose a {text}</option>
        {options.map((option, key) => (
          <option key={key} value={option.value}>{option.text}</option>
        ))}
      </select>
    </>
  );
}
