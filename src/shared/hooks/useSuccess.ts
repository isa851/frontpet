import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"

export const useSuccess = () => {
  return useQuery({
    queryKey: ["success"],
    queryFn: () => api("/home/our-success/")
  })
}