import Link from "next/link";
import { FaArrowRight, FaGit, FaGithub } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Note = () => {
  return (
    <div className="h-[10dvh] relative">
      <div className=" flex justify-center items-center text-gray-400 poppins text-xs text-center md:text-sm ">
        This website is built using Next JS and product data is stored in
        MongoDB and fetched from the database with react-query
      </div>
      <div className="absolute right-4">
        <div className="flex justify-center items-center gap-5">
          <div className="">
            <GoArrowRight />

            <p>See Code</p>
          </div>

          <Link
            href="https://github.com/purbayan1105/fruit-app"
            target="__blank">
            {" "}
            <FaGithub size={36} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Note;
