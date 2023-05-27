import http from './configAxios'

// Read All Products
const getAllProducts = () => {
    return http.get('/products?populate=*')
}

export default { getAllProducts }
