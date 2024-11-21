import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

export const UserInfo = () => {
    return (
        <Box>
            <Typography mb={"20px"} fontWeight={500} variant="h3">Персональные данные</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                        ID пользователя
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                        82935
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                        Имя и фамилия
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                        Carter Gouse
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                        Номер телефона
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                        972070973
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                        Дата рождения
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                        {/* Empty field */}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                        Пол
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                        Мужской
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                        Электронная почта
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                        {/* Empty field */}
                    </Typography>
                </Grid>
            </Grid>

            {/* Edit Button */}
            <Button
                variant="text"
                sx={{
                    marginTop: 2,
                    color: "red",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                }}
            >
                ИЗМЕНИТЬ
            </Button>

            {/* Password Section */}
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6" fontWeight="bold">
                    Пароль
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: 1 }}>
                    <Grid item xs={6}>
                        <Typography variant="body2" color="textSecondary">
                            Текущий пароль
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" fontWeight="bold">
                            ********
                        </Typography>
                    </Grid>
                </Grid>
                <Button
                    variant="text"
                    sx={{
                        marginTop: 2,
                        color: "red",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                    }}
                >
                    ИЗМЕНИТЬ
                </Button>
            </Box>
        </Box>
    )
}