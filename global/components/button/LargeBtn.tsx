import { colorChips } from "@/global/styles/colorChips";
import { Typo } from "@/global/styles/Typo";
import { Button } from "@mui/material";

interface LargeBtnProps {
  width?: string;
  height?: string;
  content: string;
  isDisabled?: boolean;
  onClickBtn?: () => void;
  style?: "contained" | "text" | "outlined";
}

export const LargeBtn: React.FC<LargeBtnProps> = ({
  content,
  isDisabled = true,
  style = "contained",
  onClickBtn,
  ...props
}) => {
  return (
    <>
      {!isDisabled ? (
        <Button
          onClick={onClickBtn}
          variant={style}
          {...props}
          sx={{
            width: props.width ? props.width : "183px",
            height: props.height ? props.height : "48px",
            borderRadius: "50px",
          }}
        >
          <Typo className="text_SB_16">{content}</Typo>
        </Button>
      ) : (
        <Button
          variant={style ? style : "contained"}
          {...props}
          sx={{
            width: props.width ? props.width : "183px",
            height: props.height ? props.height : "48px",
            borderRadius: "50px",
            bgcolor: colorChips.black_100,
            color: colorChips.gray_200,
            cursor: "not-allowed",
          }}
        >
          <Typo className="text_SB_16">{content}</Typo>
        </Button>
      )}
    </>
  );
};
