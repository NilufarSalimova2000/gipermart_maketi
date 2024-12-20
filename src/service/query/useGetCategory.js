import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetCategory = () => {
    return useQuery({
        queryKey:  ["category"],
        queryFn: () => request.get("/catalog").then((res) => res.data)
    })
}