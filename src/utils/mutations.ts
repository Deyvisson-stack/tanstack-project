import { useMutation } from "@tanstack/react-query"
import { deletePost, sendPost } from "./api"

export const useSendMutations = () => {
  return useMutation(
    { mutationFn: sendPost}
  )
}

export const useDeleteMutation = () => {
  return useMutation(
    {mutationFn: (id: number) =>  deletePost(id)}
  )
}