import { useQuery } from "@tanstack/react-query"
import { api } from "../api/client"

export const useHowItWorks = () => {

  return useQuery({
    queryKey:["how-it-works"],
    queryFn:()=>api("/home/how-it-works/")
  })

}