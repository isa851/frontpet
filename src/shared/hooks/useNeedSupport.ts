import { useMutation } from "@tanstack/react-query"
import { api } from "../api/client"

type NeedSupportType = {
  name: string
  email: string
  phone: string
  yourQuery: string
}

export const useNeedSupport = () => {
  return useMutation({
    mutationFn: (data: NeedSupportType) =>
      api("/home/need-support/", {
        method: "POST",
        body: JSON.stringify(data)
      })
  })
}