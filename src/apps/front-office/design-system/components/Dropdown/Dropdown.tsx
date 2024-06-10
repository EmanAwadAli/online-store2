export type DropdownProps = {
  // props go here
};
export default function Dropdown(props: DropdownProps) {
  return (
    <ul className="absolute z-10 bg-white top-full min-w-[150px] rounded-md shadow-md px-4 py-2 scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-500 ease-in-out">
      <li>Test</li>
    </ul>
  );
}
