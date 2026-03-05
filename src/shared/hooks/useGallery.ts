import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"
import type { PaginatedResponse } from "../types/pagination"
import type { GalleryItem } from "../types/types"

export const useGallery = (page: number) => {
  return useQuery<PaginatedResponse<GalleryItem>>({
    queryKey: ["gallery", page],
    queryFn: () => api(`/gallery/gallery/?page=${page}`),

    // React Query v5
    placeholderData: (prev) => prev
  })
}