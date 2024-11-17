import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useSingleProduct = (id) => {
    return useQuery({
        queryKey: ["single-product", id],
        queryFn: () =>  request.get(`/all/${id}`).then((res) => res.data)
    })
}