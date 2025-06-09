import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";

export const usePost = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });
}