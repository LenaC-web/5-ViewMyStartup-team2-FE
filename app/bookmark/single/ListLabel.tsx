import { colorChips } from "@/global/styles/colorChips";
import { Typo } from "@/global/styles/Typo";
import { Box, Stack } from "@mui/material";

export default function ListLabel() {
  return (
    <Stack sx={listLabelWrapperStyle}>
      <Box sx={bookmarkBoxStyle}>
        <Typo
          className="text_M_14"
          content="즐겨찾기"
          color={colorChips.white}
          customStyle={{ textAlign: "center" }}
        />
      </Box>
      <Box sx={nameBoxStyle}>
        <Typo
          className="text_M_14"
          content="기업 명"
          color={colorChips.white}
          customStyle={{ textAlign: "center" }}
        />
      </Box>
      <Box sx={descBoxStyle}>
        <Typo
          className="text_M_14"
          content="기업 소개"
          color={colorChips.white}
          customStyle={{ textAlign: "center" }}
        />
      </Box>
      <Box sx={categoryBoxStyle}>
        <Typo
          className="text_M_14"
          content="카테고리"
          color={colorChips.white}
          customStyle={{ textAlign: "center" }}
        />
      </Box>
      <Box sx={applyNumBoxStyle}>
        <Typo
          className="text_M_14"
          content="지원자 수"
          color={colorChips.white}
          customStyle={{ textAlign: "center" }}
        />
      </Box>
      <Box sx={applyBoxStyle}>
        <Typo
          className="text_M_14"
          content="지원하기"
          color={colorChips.white}
          customStyle={{ textAlign: "center" }}
        />
      </Box>
    </Stack>
  );
}

const listLabelWrapperStyle = {
  width: { xs: "696px", sm: "696px", md: "1200px" },
  borderRadius: "4px",
  flexDirection: "row",
  height: "39px",
  margin: "16px 0",
  backgroundColor: colorChips.black_100,
};

const baseLabelBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const bookmarkBoxStyle = {
  ...baseLabelBoxStyle,
  width: ["58px", "58px", "76.75px"],
};

export const nameBoxStyle = {
  ...baseLabelBoxStyle,
  width: ["150px", "150px", "250.75px"],
};

export const descBoxStyle = {
  ...baseLabelBoxStyle,
  width: ["215px", "215px", "358.15px"],
};

export const categoryBoxStyle = {
  ...baseLabelBoxStyle,
  width: ["103px", "103px", "230.65px"],
};

export const applyNumBoxStyle = {
  ...baseLabelBoxStyle,
  width: ["80px", "80px", "141.85px"],
};

export const applyBoxStyle = {
  ...baseLabelBoxStyle,
  width: ["80px", "80px", "141.85px"],
};
