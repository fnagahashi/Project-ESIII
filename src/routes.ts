import { Router } from "express";

// Users
// import { CreateUserController } from "./controller/user/CreateUserController";
// import { ListUserController } from "./controller/user/ListUserController";
// import { UpdateUserController } from "./controller/user/UpdateUserController";
// import { DeleteUserController } from "./controller/user/DeleteUserController";
// import { UpdatePasswordController } from "./controller/Password/UpdatePasswordController";

// Authentication
import { AutenticationController } from "./controller/Autentication/AutenticationController";

// Sales
// import { CreateSalesController } from "./controller/sales/CreateSalesController";
// import { ListSalesController } from "./controller/sales/ListSalesController";
// import { UpdateSalesController } from "./controller/sales/UpdateSalesController";
// import { DeleteSalesController } from "./controller/sales/DeleteSalesController";

// // Products (Books)
// import { CreateProductController } from "./controller/books/CreateProductController";
// import { ListProductController } from "./controller/books/ListProductController";
// import { UpdateProductController } from "./controller/books/UpdateProductController";
// import { DeleteProductController } from "./controller/books/DeleteProductController";

// Clients
import { CreateClientController } from "./controller/client/CreateClientController";
import { ListClientController } from "./controller/client/ListClientController";
import { UpdateClientController } from "./controller/client/UpdateClientController";
import { DeleteClientController } from "./controller/client/DeleteClientController";

// Categories
// import { CreateCategoryController } from "./controller/category/CreateCategoryController";
// import { ListCategoryController } from "./controller/category/ListCategoryController";
// import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";
// import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";

// Addresses
import { CreateAddressController } from "./controller/Address/CreateAddressController";
import { ListAddressController } from "./controller/Address/ListAddressController";
import { UpdateAddressController } from "./controller/Address/UpdateAddressController";
import { DeleteAddressController } from "./controller/Address/DeleteAddressController";

// Credit Cards
import { CreateCreditCardController } from "./controller/creditCard/CreateCreditCardController";
import { ListCreditCardController } from "./controller/creditCard/ListCreditCardController";
import { UpdateCreditCardController } from "./controller/creditCard/UpdateCreditCardController";
import { DeleteCreditCardController } from "./controller/creditCard/DeleteCreditCardController";

// Middleware
import { ensureAuthenticated } from "./midleware/ensureAuthenticated";

const router = Router();

// Users
// const createUserController = new CreateUserController();
// const listUserController = new ListUserController();
// const updateUserController = new UpdateUserController();
// const deleteUserController = new DeleteUserController();
// const updatePasswordController = new UpdatePasswordController();

// Authentication
const autenticationController = new AutenticationController();

// Sales
// const createSalesController = new CreateSalesController();
// const listSalesController = new ListSalesController();
// const updateSalesController = new UpdateSalesController();
// const deleteSalesController = new DeleteSalesController();

// Products
// const createProductController = new CreateProductController();
// const listProductController = new ListProductController();
// const updateProductController = new UpdateProductController();
// const deleteProductController = new DeleteProductController();

// Clients
const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

// Categories
// const createCategoryController = new CreateCategoryController();
// const listCategoryController = new ListCategoryController();
// const updateCategoryController = new UpdateCategoryController();
// const deleteCategoryController = new DeleteCategoryController();

// Addresses
const createAddressController = new CreateAddressController();
const listAddressController = new ListAddressController();
const updateAddressController = new UpdateAddressController();
const deleteAddressController = new DeleteAddressController();

// Credit Cards
const createCreditCardController = new CreateCreditCardController();
const listCreditCardController = new ListCreditCardController();
const updateCreditCardController = new UpdateCreditCardController();
const deleteCreditCardController = new DeleteCreditCardController();

// ========================
// Routes
// ========================

// --- Authentication ---
router.post("/login", autenticationController.handle);

// --- Users ---
// router.post("/users", createUserController.handle);
// router.get("/users", ensureAuthenticated, listUserController.handle);
// router.put("/users/:id", ensureAuthenticated, updateUserController.handle);
// router.delete("/users/:id", ensureAuthenticated, deleteUserController.handle);
// router.patch("/users/password", ensureAuthenticated, updatePasswordController.handle);

// --- Clients ---
router.post("/clients", createClientController.handle);
router.get("/clients", listClientController.handle);
router.put("/clients/:id", updateClientController.handle);
router.delete("/clients/:id", deleteClientController.handle);

// --- Products ---
// router.post("/products", ensureAuthenticated, createProductController.handle);
// router.get("/products", listProductController.handle);
// router.put("/products/:id", ensureAuthenticated, updateProductController.handle);
// router.delete("/products/:id", ensureAuthenticated, deleteProductController.handle);

// // --- Categories ---
// router.post("/categories", ensureAuthenticated, createCategoryController.handle);
// router.get("/categories", listCategoryController.handle); // leitura pública
// router.put("/categories/:id", ensureAuthenticated, updateCategoryController.handle);
// router.delete("/categories/:id", ensureAuthenticated, deleteCategoryController.handle);

// --- Addresses ---
router.post("/addresses", createAddressController.handle);
router.get("/addresses", listAddressController.handle);
router.put("/addresses/:id", updateAddressController.handle);
router.delete("/addresses/:id", deleteAddressController.handle);

// --- Credit Cards ---
router.post("/credit-cards", createCreditCardController.handle);
router.get("/credit-cards", listCreditCardController.handle);
router.put("/credit-cards/:id", updateCreditCardController.handle);
router.delete("/credit-cards/:id", deleteCreditCardController.handle);

// --- Sales ---
// router.post("/sales", ensureAuthenticated, createSalesController.handle);
// router.get("/sales", ensureAuthenticated, listSalesController.handle);
// router.put("/sales/:id", ensureAuthenticated, updateSalesController.handle);
// router.delete("/sales/:id", ensureAuthenticated, deleteSalesController.handle);

export { router };
