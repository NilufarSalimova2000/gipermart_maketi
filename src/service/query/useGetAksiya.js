import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetAksiya = () => {
    return useQuery({
        queryKey: ["aksiya"],
        queryFn: () => request.get("/ads").then((res) => res.data)
    })
}