import Container from "../../Shared/Container";
import CategoriesBox from "./CategoriesBox";
import { categories } from "./CategoriesData";

const Categories = () => {
  return (
    <Container>
      <div className=" py-4 flex items-center justify-between overflow-x-auto">
        {categories.map((category) => (
          <CategoriesBox
            key={category}
            icon={category.icon}
            label={category.label}
          ></CategoriesBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
