import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export enum ETypeInput {
  input = "input",
  password = "password",
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
  width?: string
  height?: string
  options?: Array<string>
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}

function Input({
  href = "",
  type = ETypeInput.input,
  text = "",
  placeholder = "Placeholder",
  color = "bg-white",
  value,
  width = "w-15",
  height = "h-10",
  options = [],
  onChange,
}: InputProps) {

  const [visiblePassword, setVisiblePassword] = useState(false);

  const inputType = type === ETypeInput.password ? visiblePassword ? "text" : "password" : "text";


  const input = (
    <div className="flex flex-col relative w-full h-full justify-center items-center">
      <label className="pl-2 text-white">{text}</label>

      {(type === ETypeInput.input || type === ETypeInput.password) && (
        <input
          className={`
            ${width} ${height} px-4
            rounded-[6px] border-2 border-slate-400
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
          type={inputType}
          value={value}
          onChange={onChange}
        />
      )}
      {type === ETypeInput.password && (
        visiblePassword ? (
          <EyeOff
            className="absolute right-2 top-1/2 cursor-pointer"
            color="#64748B"
            onClick={() => setVisiblePassword(false)}
          />
        ) : (
          <Eye
            className="absolute right-2 top-1/2 cursor-pointer"
            color="#64748B"
            onClick={() => setVisiblePassword(true)}
          />
        )
      )}
      {type === ETypeInput.select && (
        <select
          className={`${color} 
            ${width} ${height} px-4
            rounded-md border-2 border-slate-400
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
