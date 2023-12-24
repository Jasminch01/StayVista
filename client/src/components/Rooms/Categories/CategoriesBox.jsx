import PropTypes from "prop-types";
const CategoriesBox = ({ label, icon: Icon }) => {
  return (
    <div className="flex items-center justify-center flex-col border-b-2 hover:text-neutral-800  transation cursor-pointer">
      <Icon size={26}></Icon>
      <div>{label}</div>
    </div>
  );
};

CategoriesBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.symbol,
};

export default CategoriesBox;
