import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import CategoriesBox from "./CategoriesBox";
import { categories } from "./CategoriesData";

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  return (
    <Container>
      <div className=" pt-5 flex items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoriesBox
            key={item}
            icon={item.icon}
            label={item.label}
            selected={category === item.label}
          ></CategoriesBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
