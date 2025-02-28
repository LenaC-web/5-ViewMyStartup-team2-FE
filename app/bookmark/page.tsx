"use client";

import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Features } from "./features";
import { Single } from "./single";
import { SkeletonCompanyList } from "@/global/components/SkeletonCompanyItems";
import { ListPagination } from "@/global/components/ListPagination";
import { ApplyModal } from "@/global/components/modal/ApplyModal";
import { useBookmarkStore } from "./core/store";
import Cookies from "js-cookie";
import {
  listLayout,
  listWrapperStyle,
  scrollWrapper,
} from "@/global/styles/companyListStyles";
import { applyCompany } from "../company-detail/store/applyApi";

export default function BookmarkPage() {
  const {
    bookMarks,
    totalPages,
    currentPage,
    fetchBookMarks,
    setPage,
    setSort,
    isApplyModalOpen,
    applyModalData,
    toggleApplyModal,
  } = useBookmarkStore();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [content, setContent] = useState("");

  const onAplly = async () => {
    try {
      if (!applyModalData) {
        return console.log("error");
      }
      await applyCompany(
        applyModalData.companyId ? applyModalData.companyId : "",
        name,
        role,
        content
      );
      setContent("");
      setName("");
      setRole("");
      toggleApplyModal(false);
      fetchBookMarks();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // 필요하다면 여기에서 userId를 확인할 수 있음
    if (!Cookies.get("id")) {
      console.error("❌ 쿠키에서 userId를 찾을 수 없습니다.");
      return;
    }
    fetchBookMarks();
  }, [fetchBookMarks]);

  const handleModalClose = () => {
    toggleApplyModal(false);
  };

  return (
    <Stack sx={listLayout}>
      {/* Sorting 컴포넌트 */}
      <Features.ListTitle onSelectSort={setSort} />

      <Box sx={scrollWrapper}>
        <Box sx={listWrapperStyle}>
          <Single.ListLabel />
          {bookMarks.length === 0 ? (
            <SkeletonCompanyList />
          ) : (
            // onApply 콜백을 전달; BookmarkDTO를 ApplyModalData로 변환하여 전달함
            <Features.BookmarkList
              companies={bookMarks}
              onApply={(companyData) =>
                toggleApplyModal(true, {
                  image: companyData.image ?? "",
                  name: companyData.name,
                  category: companyData.category, // 배열로 저장됨; 모달에서 렌더링할 때 변환 예정
                  companyId: companyData.id,
                })
              }
            />
          )}
        </Box>
      </Box>

      <ListPagination
        page={currentPage}
        count={totalPages}
        onPageChange={setPage}
      />

      {isApplyModalOpen && applyModalData && (
        <ApplyModal
          open={isApplyModalOpen}
          handleClose={handleModalClose}
          onAplly={onAplly}
          onNameChange={(e) => setName(e.target.value)}
          onContentChange={(e) => setContent(e.target.value)}
          onRoleChange={(e) => setRole(e.target.value)}
          values={{ name, role, content }}
          companyData={{
            image: applyModalData.image,
            name: applyModalData.name,
            // 카테고리 배열을 문자열로 변환하여 표시함
            category: applyModalData.category.map((c) => c.category).join(", "),
          }}
        />
      )}
    </Stack>
  );
}
