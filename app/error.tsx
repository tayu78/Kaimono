"use client";
import Link from "next/link";

interface Props {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: Props) => {
  return (
    <div className="mt-10 w-full flex-col items-center justify-center text-center">
      <p className=" text-lg md:text-3xl lg:text-6xl">
        Unexpected Error Occured in Server:{"("}
      </p>
      <div className="mt-10">
        <Link
          href={"/"}
          className="text-md mr-5 rounded-md bg-black p-3 text-white md:p-5 md:text-xl"
        >
          back to Home
        </Link>
        <button
          className="text-md rounded-md border-2 p-3 md:p-5 md:text-xl"
          onClick={reset}
        >
          retry
        </button>
      </div>
    </div>
  );
};

export default error;
