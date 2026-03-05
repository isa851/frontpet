import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"
import type { SuccessItem } from "../types/types"

export const useSuccess = () => {
  return useQuery<SuccessItem[]>({
    queryKey: ["success"],
    queryFn: () => api("/home/our-success/")
  })
}