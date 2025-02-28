import { useEffect, useCallback, useState } from "react";
import { getCompanyListAPI } from "./getCompanyListAPI";
import {
  ComparisonSearchQuery,
  ComparisonSearchResponse,
  ComparisonCompanyDTO,
} from "@/global/types/data-contracts";

interface UseCompanyFetchOutput {
  isLoading: boolean;
  companies: ComparisonCompanyDTO[];
  totalPages: number;
  totalCount: number; // 전체 기업 수 추가
}

export const useCompanyFetch = (
  params: ComparisonSearchQuery
): UseCompanyFetchOutput => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ComparisonSearchResponse["data"]>({
    companies: [],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      itemsPerPage: 10,
    },
  });

  const { page, keyword } = params;

  // 기업 목록을 불러오는 함수
  const fetchCompanies = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      const startTime = Date.now();
      const response: ComparisonSearchResponse = await getCompanyListAPI({
        page,
        keyword,
      });
      setData({
        companies: response.data.companies, // response.data에 companies를 맞추어 설정
        pagination: response.data.pagination, // pagination을 맞추어 설정
      });

      // 경과시간 계산
      const elTime: number = Date.now() - startTime;
      const remainingTime: number = Math.max(500 - elTime, 0);

      // 최소 시간 지연(스켈레톤 보여주는 로딩 최소 시간)
      await new Promise((resolve) => setTimeout(resolve, remainingTime));
    } catch (error) {
      console.error("기업 목록 불러오기 오류: ", error);
    } finally {
      setIsLoading(false); // API 실행이 종료되면 섹션 로딩 상태 종료
    }
  }, [page, keyword]);

  useEffect(() => {
    if (page !== data.pagination.currentPage || keyword !== undefined) {
      fetchCompanies();
    }
  }, [fetchCompanies, page, keyword, data.pagination.currentPage]); // page와 keyword가 변경될 때만 호출

  return {
    isLoading,
    companies: data.companies,
    totalPages: data.pagination.totalPages,
    totalCount: data.pagination.totalItems, // totalCount 추가
  };
};
