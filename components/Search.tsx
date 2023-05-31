import React from "react";
import { motion } from "framer-motion";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search = ({ setIsOpen }: Props) => {
  const delay = 0.1;
  const inputVariants = {
    hidden: {
      width: 0,
      display: "none",
      // x: -100,
    },
    visible: {
      width: "75%",
      display: "flex",
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };

  const cancelVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.2,
        delay: delay + 0.5,
      },
    },
  };
  return (
    <div className="fixed left-0 top-0 z-30 h-screen w-screen bg-white">
      <div className="flex items-center justify-end gap-5 py-10 pr-10">
        <motion.div
          className="flex  items-center"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        >
          <div
            className="h-[60px] cursor-pointer rounded-l-lg bg-slate-100 p-5 pr-0"
            onClick={() => setIsOpen(false)}
          >
            <SearchOutlinedIcon />
          </div>
          <motion.input
            className=" h-[60px] flex-1 rounded-lg rounded-l-none border-none bg-slate-100 p-5 focus:outline-none"
            placeholder="Search"
            type="text"
          />
        </motion.div>

        <motion.span
          className="min-w-[15%] cursor-pointer text-center text-xl"
          onClick={() => setIsOpen(false)}
          variants={cancelVariants}
          animate="visible"
          initial="hidden"
        >
          Cancel
        </motion.span>
      </div>
    </div>
  );
};

export default Search;
