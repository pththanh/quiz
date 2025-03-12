import { useQuery } from "@tanstack/react-query";
import { getListCategory } from "../apis/category/getListCategory";
import { flattenListCategory } from "../utils/flattenListCategory";

export function useGetListCategory() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["list-category"],
    queryFn: getListCategory,
  });

  console.log("data", data);

  if (isLoading) return { isLoading: true, categories: [] };
  if (error) {
    console.log("ERROR:", error);
    return { isLoading: false, error };
  }

  return { isLoading: false, categories: flattenListCategory(data) };
}
