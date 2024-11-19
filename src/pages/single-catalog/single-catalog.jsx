import React from "react";
import { useGetSingleCatalog } from "../../service/query/useGetSingleCatalog";
import { Link, useParams } from "react-router-dom";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { ProductCard } from "../../components/product-card";

export const SingleCatalog = () => {
    const { name } = useParams()
    const { data, isLoading } = useGetSingleCatalog(name);
    return (
        <Box py={"50px"}>
            <Container maxWidth="xl">
                <Stack direction={"row"} justifyContent={"space-between"}>
                    {isLoading ? (
                        <Typography>Loading...</Typography>
                    ) : (
                        <Grid container spacing={2} flex={1}>
                            {data?.map((item) => (
                                <Grid
                                    key={item.id}
                                    xl={3}
                                >
                                    <ProductCard {...item} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    <Box width={"330px"} border={"2px solid #ededed"}>
                        <Typography>Сортировка</Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}