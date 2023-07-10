//Model User
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - nickname
 *         - lastname
 *         - address
 *         - zip_code
 *         - city
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           example: ester
 *         nickname:
 *           type: string
 *           example: ester123
 *         lastname:
 *           type: string
 *           example: lopez
 *         address:
 *           type: string
 *           example: peronia123
 *         zip_code:
 *           type: integer
 *           example: Z9902
 *         city:
 *           type: string
 *           example: Evitaland
 *         email:
 *           type: string
 *           format: email
 *           example: ester@ester.com
 *         password:
 *           type: string
 *
 *       example:
 *         name: Ester
 *         nickname: ester123
 *         lastname: lopez
 *         address: peronia123
 *         zip_code: Z9902
 *         city: Evitaland
 *         email: ester@ester.com
 *         password: password
 */

//SIGNUP
/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Signup a new user
 *     description: Creates a new user with the provided data
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: User already exists
 */

//Login
/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Login a user with valid nickname and password.
 *     tags:
 *       - User
 *     parameters:
 *       - in: body
 *         name: user
 *         description: User login credentials.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nickname:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Successful login.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 nickname:
 *                   type: string
 *                 is_admin:
 *                   type: boolean
 *       400:
 *         description: Invalid login credentials.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

//LOGOUT USER
/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Logout user
 *     description: Logs out the currently logged-in user by clearing the token cookie.
 *     tags:
 *       - User
 *     responses:
 *       204:
 *         description: User logged out successfully.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

//GET USER SHOPPING CART
/**
 * @swagger
 * /user/{nickname}/shopping-cart:
 *   get:
 *     summary: Get user's shopping cart
 *     description: Retrieves the shopping cart of a user based on their nickname.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: nickname
 *         description: User's nickname.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User's shopping cart retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 purchased:
 *                   type: boolean
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

// PERSISTENCY
/**
 * @swagger
 * /me:
 *   get:
 *     summary: Get current user information
 *     description: Retrieves information about the currently logged-in user.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Current user information retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized. User not logged in or invalid token.
 */

//UPDATE USER DATA
/**
 * @swagger
 * /user/{nickname}:
 *   put:
 *     summary: Update user data
 *     description: Updates the data of a user based on their nickname.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: nickname
 *         description: User's nickname.
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: userChanges
 *         description: Updated user data.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: Estercita
 *             nickname:
 *               type: string
 *               example: estercita123
 *             lastname:
 *               type: string
 *               example: Lopez
 *             address:
 *               type: string
 *               example: Peronia 123
 *             zip_code:
 *               type: string
 *               example: Z9902
 *             city:
 *               type: string
 *               example: Evitaland
 *             email:
 *               type: string
 *               example: ester@ester.com
 *             password:
 *               type: string
 *               example: password
 *     responses:
 *       200:
 *         description: User data updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 nickname:
 *                   type: string
 *                 lastname:
 *                   type: string
 *                 address:
 *                   type: string
 *                 zip_code:
 *                   type: string
 *                 city:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
