import { RadialGradBigIcon } from "../../../resources/icons/BigIcons";
import CategoriesContStyle from "./style";

interface Iprops {}

const CategoriesCont = (props: Iprops) => {
  const {} = props;
  return (
    <CategoriesContStyle>
      <div className="background_cont">
        <RadialGradBigIcon />
      </div>
    </CategoriesContStyle>
  );
};

export default CategoriesCont;
