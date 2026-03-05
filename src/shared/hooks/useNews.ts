import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"

export const useNews = (page: number) => {

  return useQuery({
    queryKey: ["news", page],
    queryFn: () => api(`/news/news/?page=${page}`),
    keepPreviousData: true
  })

}