import PropTypes from "prop-types";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoriesBox = ({ label, icon: Icon, selected }) => {
  const [params, setParems] = useSearchParams();
  const navigate = useNavigate();

  //searchclick
  const handleClick = () => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = { ...currentQuery, category: label };
    const url = qs.stringifyUrl({
      url: "/",
      query: updateQuery,
    });

    navigate(url);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center flex-col border-b-2 hover:text-neutral-800  transation cursor-pointer ${
        selected
          ? `border-b-neutral-800 text-neutral-800`
          : `text-neutral-500 border-b-neutral-300 `
      }`}
    >
      <Icon size={26}></Icon>
      <div>{label}</div>
    </div>
  );
};

CategoriesBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.symbol,
  selected: PropTypes.bool.isRequired,
};

export default CategoriesBox;
