import { Sidebar } from ".";

export default function page({ active, children, restProps }) {
  return (
    <div className="box-border min-hscreen flex">
      <Sidebar active={active} />
      <div
        {...restProps}
        className="w-full lg:ew-top lg border-r-24 border-r-primary-dark lg:px-12 pt-8 border-r-solid lg:border-t-24 border-t-primary-dark border-t-solid bg-primary-background  overflow-auto h-[100vh]"
      >
        {children}
      </div>
    </div>
  );
}
