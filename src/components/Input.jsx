import { memo } from "react";
import { RiErrorWarningFill } from "react-icons/ri";

const Input = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
  label,
}) => {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-md shadow px-6 py-[1ch] outline-[0.2px] text-sm font-600 text-DarkBlue placeholder-DarkBlue placeholder-opacity-60 
            ${
              error
                ? "outline-Red outline-[1.5px] pr-12"
                : "outline-GrayishBlue"
            } 
            focus:outline-none focus:ring-1 transition-colors duration-200`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {error && (
          <RiErrorWarningFill className="absolute right-4 top-1/2 -translate-y-1/2 text-Red pointer-events-none" />
        )}
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="text-Red text-right text-xs font-medium italic mt-1"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default memo(Input);
