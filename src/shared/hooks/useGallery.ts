import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"

export const useGallery = (page: number) => {

  return useQuery({
    queryKey: ["gallery", page],
    queryFn: () => api(`/gallery/gallery/?page=${page}`),
    keepPreviousData: true
  })

}