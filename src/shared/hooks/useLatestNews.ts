import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"
import type { NewsItem } from "../types/types"

export const useLatestNews = () => {
  return useQuery<NewsItem[]>({
    queryKey: ["latest-news"],
    queryFn: () => api("/home/latest-news/")
  })
}