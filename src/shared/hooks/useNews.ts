import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"
import type { PaginatedResponse } from "../types/pagination"
import type { NewsItem } from "../types/types"

export const useNews = (page: number) => {
  return useQuery<PaginatedResponse<NewsItem>>({
    queryKey: ["news", page],
    queryFn: () => api(`/news/news/?page=${page}`),

    placeholderData: (prev) => prev
  })
}