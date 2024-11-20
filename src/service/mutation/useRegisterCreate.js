import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";
import { saveState } from "../../utils/storage";

export const useRegisterCreate = () => {
    return useMutation({
        mutationFn: (data) => request.post("/register", data).then((res) => res.data),
        onSuccess: (data) => {
            saveState("userData", data)
        }
    })
}