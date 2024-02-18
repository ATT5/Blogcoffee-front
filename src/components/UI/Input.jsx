const Input = ({ id, label, value, onChange, placeholder, type = "text" }) => {
  return (
    <div className="py-1">
      {label && (
        <label htmlFor={id} className="font-semibold text-xl block ">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className="w-[80%] md:w-1/2 lg:w-1/3 bg-gray-50 text-gray-900 text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
