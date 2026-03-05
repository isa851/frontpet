import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"

export const useBanner = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: () => api("/home/banner/")
  })
}