import { FaPersonArrowUpFromLine } from "react-icons/fa6";

export default function ScrollTop() {

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-top flex items-center justify-center fixed right-5 bottom-8 w-14 h-14 bg-white text-primary text-2xl rounded-lg shadow-2xl border border-primary-100 cursor-pointer hover:bg-primary-100 transition-all duration-500 ease-in-out" onClick={scrollToTop}>
      <FaPersonArrowUpFromLine/>
    </div>
  );
}
