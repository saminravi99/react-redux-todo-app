import { useDispatch, useSelector } from "react-redux";
import { colorChanged } from "../redux/filters/actions";

export default function FooterCompleteTask({ filterByCompleted }) {
  
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();
 
  const { colors } = filters;

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

 
  return (
    <div
      className={`mt-4 flex justify-between text-sm font-bold text-green-600
    
     `}
    >
      <p>
        {filterByCompleted.length > 1
          ? `${filterByCompleted.length} Tasks Completed`
          : filterByCompleted.length === 1
          ? `${filterByCompleted.length} Task Completed`
          : "No Completed Tasks"}
      </p>
      <ul className="flex space-x-1 items-center text-xs">
        <li></li>
        <li></li>
        {/* <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChange("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChange("yellow")}
        ></li> */}
      </ul>
    </div>
  );
}

