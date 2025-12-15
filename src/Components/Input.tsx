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
          className={`
            w-full h-12 px-4
            rounded-xl border-2 border-slate-300
            text-slate-700 ${color}
            transition-all duration-100
            transform

            hover:scale-[1.05]
            focus:scale-[1.05]

            hover:border-slate-400
            focus:border-slate-400

            focus:outline-0
            hover:outline-0
            focus:shadow-md
            hover:shadow-md
          `}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

      {type === ETypeInput.select && (
        <select
          className={`${color} 
            w-full h-12 px-4
            rounded-md border-2 border-slate-300
            text-slate-700
            transition-all duration-100
            transform

            hover:scale-[1.05]
            focus:scale-[1.05]
            hover:border-slate-400
            focus:border-slate-400
            focus:outline-0
            focus:shadow-md`}
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
