import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../service/query/useSearch";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { ProductCard } from "../../components/product-card/product-card";

export const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const { data, isLoading } = useSearch(query);

    return (
        <Box py={"50px"}>
            <Container maxWidth="xl">
                <Grid2 container spacing={"20px"}>
                    {isLoading ? (
                        <Typography>Loading...</Typography>
                    ) : data?.length > 0 ? (
                        data.map((item) => <Grid2 size={2} key={item.id}><ProductCard  {...item} /></Grid2>)
                    ) : (
                        <Typography>No results found for "{query}"</Typography>
                    )}
                </Grid2>
            </Container>
        </Box>
    );
};
