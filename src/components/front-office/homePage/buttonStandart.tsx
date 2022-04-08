import type { NextPage } from "next";

interface Props {
  title: string;
}

const ButtonStandart: NextPage<Props> = (props) => {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {props.title}
    </button>
  );
};

export default ButtonStandart;
