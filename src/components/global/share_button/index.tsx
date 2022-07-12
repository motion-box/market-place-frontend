import { ExportIcon } from "../../../resources/icons/CommonIcons";
import ShareButtonStyle, { ShareButtonModel } from "./style";

interface Iprops {
  onClick: () => void;
  options: ShareButtonModel;
}

const ShareButton = (props: Iprops) => {
  const { onClick, options } = props;
  return (
    <ShareButtonStyle {...options} onClick={onClick}>
      <ExportIcon color={options.$iconColor} />
    </ShareButtonStyle>
  );
};
export default ShareButton;
