export default function Input({ label, children, ...restprops }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={label}
        className="text-mobile-h5 md:text-tablet-h4 lg:text-h5 font-semibold text-primary-white mb-2"
      >
        {label}
      </label>
      <input
        id={label}
        {...restprops}
        className="pl-2 rounded-[10px] outline-primary-light font-semibold md:w-[300px] xl:w-354 h-14 md:h-14 xl:h-16 bg-primary-white border-1 lg:border-2 border-primary-light border-solid"
      />
    </div>
  );
}
