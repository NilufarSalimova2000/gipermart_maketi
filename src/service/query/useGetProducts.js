import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = (path) => {
    return useQuery({
        queryKey: ["product", path],
        queryFn: () => request.get(`/${path}`).then((res) => res.data)
    })
}