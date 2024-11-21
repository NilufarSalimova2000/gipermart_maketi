import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginCreate } from "../../service/mutation/useLoginCreate";
import { toast } from "react-toastify";
import { Box, Button, TextField, Typography } from "@mui/material";
import { saveState } from "../../utils/storage";

export const Login = () => {
    const { handleSubmit, register, reset } = useForm();
    const { mutate } = useLoginCreate();

    const submit = (data) => {
        mutate(data, {
            onSuccess: (res) => {
                console.log(res);
                toast.success("Muvaffaqiyatli");
                saveState("userData", res);


               
            },
            onError: (error) => {
                toast.error("Ro'yxatdan o'tmagansiz")
            }
             
        })
        reset();
    }
    return (
        <>
            <Box >

                <Typography fontSize={"20px"} variant="h3" textAlign={"center"}>
                    Войти или создать профиль
                </Typography>
                <form onSubmit={handleSubmit(submit)}>
                    
                <TextField type="email"
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        {...register("email")}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Пароль"
                        variant="outlined"
                        margin="normal"
                        {...register("password")}
                    />
                    <Typography variant="body2" sx={{ textAlign: "right", marginBottom: 2 }}>
                        Забыли пароль?
                    </Typography>
                    <Button type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ backgroundColor: "yellow", color: "black", marginBottom: 2 }}
                    >
                        Войти
                    </Button>
                </form>
            </Box>
        </>
    )
}