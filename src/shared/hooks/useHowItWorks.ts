import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"
import type { HowItWorksItem } from "../types/types"

export const useHowItWorks = () => {
  return useQuery<HowItWorksItem[]>({
    queryKey: ["how-it-works"],
    queryFn: () => api("/home/how-it-works/")
  })
}