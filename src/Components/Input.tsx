export enum ETypeInput {
  input = "input",
  select = "select",
  submit = "submit",
  button = "button"
}

type InputProps = {
  href?: string
  type?: ETypeInput
  text?: string
  placeholder?: string
  color?: string
  value?: string
  options?: Array<string>
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}

function Input({
  href = "",
  type = ETypeInput.input,
  text = "Label",
  placeholder = "Placeholder",
  color = "bg-white",
  value,
  options = [],
  onChange,
}: InputProps) {

  const input = (
    <div className="flex flex-col">
      <label className="pl-2">{text}</label>

      {type === ETypeInput.input && (
        <input
          className={`${color} outline-0 border-slate-400 border-2 text-slate-600 p-2 rounded-md hover:p-3 duration-75 hover:duration-75 focus:placeholder:opacity-0`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

      {type === ETypeInput.select && (
        <select
          className={`${color} outline-0 border-slate-400 border-2 text-slate-600 p-2 rounded-md hover:p-3 duration-150 hover:duration-150`}
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );

  if (href !== "") return <a href={href}>{input}</a>;
  return input;
}

export default Input;
