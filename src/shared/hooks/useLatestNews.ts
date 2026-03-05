import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"

export const useLatestNews = () => {

  return useQuery({
    queryKey: ["latest-news"],
    queryFn: () => api("/home/latest-news/")
  })

}