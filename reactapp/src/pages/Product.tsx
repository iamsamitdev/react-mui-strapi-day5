import { PRODUCT_TITLE, SYSTEM_NAME } from "../config/constants"
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import api from "../../services/productAPI"
import { useState, useEffect } from "react"

const Product = () => {

    // Create state for products
    const [products, setProducts] = useState([])

    // Read all products
    const readAllProducts = () => {
        api.getAllProducts().then(response => {
            setProducts(response.data.data)
        })
    }

    // initial load with useEffect
    useEffect(() => {
        readAllProducts()
    }, [])

    console.log(products)

    // Set title
    document.title =  PRODUCT_TITLE + ' | ' + SYSTEM_NAME

    return (
        <>
            <h1>Products</h1>
            <Box sx={styles.columnsContainer}>
                   <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Qty</TableCell>
                                    <TableCell>Create</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { 
                                    products.map((product: any, index: any) => (
                                        <TableRow key={index}>
                                            <TableCell>{product.id}</TableCell>
                                            <TableCell>{product.attributes.title}</TableCell>
                                            <TableCell>{product.attributes.price}</TableCell>
                                            <TableCell>
                                                <img src={import.meta.env.VITE_BASE_IMAGE_URL+product.attributes.image.data[0].attributes.url} alt="" width={50} />
                                            </TableCell>
                                            <TableCell>{product.attributes.qty}</TableCell>
                                            <TableCell>{product.attributes.publishedAt}</TableCell>
                                            <TableCell>
                                                <Button variant="contained" color="warning">Edit</Button>&nbsp;&nbsp;
                                                <Button variant="contained" color="error">Delete</Button>
                                            </TableCell>
                                        </TableRow>
                                    )) 
                                }
                            </TableBody>
                        </Table>
                   </TableContainer>
                </Box>
        </>
    )
}

export default Product

const styles = {
    columnsContainer: {
        columns: '280px 1',
        maxWidth: 1400
    },
}
