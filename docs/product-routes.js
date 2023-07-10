//Model PRODUCT
/**
 * @swagger
 *  components:
 *    schemas:
 *      Product:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *            description: The ID of the product.
 *          name:
 *            type: string
 *            description: The name of the product.
 *          price:
 *            type: number
 *            description: The price of the product.
 *          description:
 *            type: string
 *            description: The description of the product.
 *          rating:
 *            type: number
 *            description: The rating of the product.
 *          image:
 *            type: string
 *            description: The URL of the product image.
 *          total_sales:
 *            type: integer
 *            description: The total sales of the product.
 *          category:
 *            type: array
 *            items:
 *              type: string
 *            description: The category of the product.
 *        example:
 *          id: 1
 *          name: Example Product
 *          price: 9.99
 *          description: This is an example product.
 *          rating: 4.5
 *          image: https://www.example.com/example-product.jpg
 *          total_sales: 100
 *          category:
 *            - Electronics
 */
