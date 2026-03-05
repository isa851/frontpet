import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"
import type { Banner } from "../types/types"

export const useBanner = () => {
  return useQuery<Banner[]>({
    queryKey: ["banner"],
    queryFn: () => api<Banner[]>("/home/banner/")
  })
}