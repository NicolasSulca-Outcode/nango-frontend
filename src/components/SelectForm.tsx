
export type Option = {
    key: string | number;
    value: string | number;
}

export type SelectProps = {
    text: string
    id: string;
    name: string;
    options: Option[];
    onChange: () => void;
}

export const SelectField = ({text, id, name, options, onChange}: SelectProps) => {
    return(
        <>
        <div className="relative z-0 w-full m-4 group">
            <label htmlFor={name} className="sr-only">{text}</label>
            <select 
                onChange={onChange}
                id={id}
                name={name}
                defaultValue={"default"}
                className={`block py-2.5 px-0 w-full text-sm text-gray-500 
                bg-transparent border-0 border-b-2 border-gray-200 
                appearance-none dark:text-gray-400 
                dark:border-gray-700 focus:outline-none focus:ring-0 
                focus:border-gray-200 peer`}>
                {options.map((opt: Option, index: number) => 
                    <option 
                        key={index} 
                        value={opt.key}>
                        {opt.value}
                    </option>
                )}
            </select>
        </div>
        </>
    )
}

