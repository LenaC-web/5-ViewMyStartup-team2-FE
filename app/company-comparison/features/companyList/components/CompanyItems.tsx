import {
  dataBoxStyle,
  descBoxStyle,
  rankingBoxStyle,
} from "@/app/company-comparison/single/ListLabel";
import { colorChips } from "@/global/styles/colorChips";
import { Typo } from "@/global/styles/Typo";
import { CompanyData } from "@/app/company-comparison/data-contracts";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useCompanyImg } from "../core/useCompanyImg";

interface CompanyItemsProps {
  itemData: CompanyData;
}

export const CompanyItems = {
  Bookmark: function ({ itemData }: CompanyItemsProps) {
    const { handleImgErr, imgSrc } = useCompanyImg(itemData.image);

    return (
      <Stack sx={bookmarkItemBoxStyle}>
        <Box sx={bookmarkBoxStyle}>
          <Image
            src={imgSrc}
            width={80}
            height={80}
            alt="기업 대표 이미지"
            style={{ borderRadius: "360px" }}
            onError={handleImgErr}
          />
        </Box>
        <Box sx={bookmarkBoxStyle}>
          <Typo
            className="text_M_20"
            content={itemData.name}
            color={colorChips.white}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
        <Box sx={bookmarkBoxStyle}>
          <Typo
            className="text_M_18"
            content={itemData.category[0]}
            color={colorChips.gray_200}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
      </Stack>
    );
  },

  Result: function ({ itemData }: CompanyItemsProps) {
    const { handleImgErr, imgSrc } = useCompanyImg(itemData.image);

    return (
      <Stack sx={companyItemBoxStyle}>
        <Box sx={imgNameBoxStyle}>
          <Image
            src={imgSrc}
            width={32}
            height={32}
            alt="기업 대표 이미지"
            style={{ borderRadius: "360px", alignContent: "center" }}
            onError={handleImgErr}
          />
          <Typo
            className="text_M_14"
            content={itemData.name}
            color={colorChips.white}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
        <Box
          sx={{
            ...descBoxStyle,
            padding: "15px 16px",
          }}
        >
          <Typo
            className="text_R_14"
            content={itemData.content}
            color={colorChips.gray_100}
            customStyle={companyDescTypoStyle}
          />
        </Box>
        <Box sx={dataBoxStyle}>
          <Typo
            className="text_R_14"
            content={itemData.category[0]}
            color={colorChips.gray_100}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
        <Box sx={dataBoxStyle}>
          <Typo
            className="text_R_14"
            content={itemData.salesRevenue.toString()}
            color={colorChips.gray_100}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
        <Box sx={dataBoxStyle}>
          <Typo
            className="text_R_14"
            content={itemData.employeeCnt.toString()}
            color={colorChips.gray_100}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
        <Box sx={dataBoxStyle}>
          <Typo
            className="text_R_14"
            content={itemData.applicantsCnt.toString()}
            color={colorChips.gray_100}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
      </Stack>
    );
  },

  Ranking: function ({ itemData }: CompanyItemsProps) {
    const { handleImgErr, imgSrc } = useCompanyImg(itemData.image);

    return (
      <Stack sx={companyItemBoxStyle}>
        <Box sx={rankingBoxStyle}>
          <Typo
            className="text_R_14"
            content={`${(itemData.ranking ?? 0) + 1}위`} // null 또는 undefined인 경우 0으로 반환
            color={colorChips.gray_100}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
        <Box sx={imgNameBoxStyle}>
          <Image
            src={imgSrc}
            width={32}
            height={32}
            alt="기업 대표 이미지"
            style={{ borderRadius: "360px", alignContent: "center" }}
            onError={handleImgErr}
          />
          <Typo
            className="text_M_14"
            content={itemData.name}
            color={colorChips.white}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
        <Box
          sx={{
            ...descBoxStyle,
            padding: "15px 16px",
          }}
        >
          <Typo
            className="text_R_14"
            content={itemData.content}
            color={colorChips.gray_100}
            customStyle={companyDescTypoStyle}
          />
        </Box>
        <Box sx={dataBoxStyle}>
          <Typo
            className="text_R_14"
            content={itemData.category[0]}
            color={colorChips.gray_100}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
        <Box sx={dataBoxStyle}>
          <Typo
            className="text_R_14"
            content={itemData.salesRevenue.toString()}
            color={colorChips.gray_100}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
        <Box sx={dataBoxStyle}>
          <Typo
            className="text_R_14"
            content={itemData.employeeCnt.toString()}
            color={colorChips.gray_100}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
        <Box sx={dataBoxStyle}>
          <Typo
            className="text_R_14"
            content={itemData.applicantsCnt.toString()}
            color={colorChips.gray_100}
            customStyle={{ textAlign: "center" }}
          />
        </Box>
      </Stack>
    );
  },
};

const companyItemBoxStyle = {
  flexDirection: "row",
  height: "64px",
  borderBottom: `1px solid ${colorChips.gray_300}`,
  "&:last-child": {
    borderBottom: "none",
  },
};

const imgNameBoxStyle = {
  display: "flex",
  alignItems: "center",
  gap: ["8px", "8px", "12px"],
  justifyContent: "center",
  width: ["150px", "150px", "216px"],
};

const companyDescTypoStyle = {
  overflow: "hidden", //넘치는 내용 숨기기
  display: "-webkit-box", //말줄임표
  WebkitLineClamp: 2, //최대 2줄까지만 표시
  WebkitBoxOrient: "vertical" as const, //세로 방향 줄바꿈 적용
  whiteSpace: "normal",
  wordBreak: "break-word" as const, //단어 단위로 줄바꿈
};

const bookmarkItemBoxStyle = {
  display: "flex",
  height: "139px",
  alignItems: "center",
  justifyContent: "center",
  mr: "20px",
  "&:last-child": {
    mr: "0px",
  },
};

const bookmarkBoxStyle = {};
