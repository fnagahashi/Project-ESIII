import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUserController } from "./controller/user/ListUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";

import { DeleteSalesController } from "./controller/sales/DeleteSalesController";
import { UpdateSalesController } from "./controller/sales/UpdateSalesController";
import { ListSalesController } from "./controller/sales/ListSalesController";
import { CreateSalesController } from "./controller/sales/CreateSalesController";

import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductController } from "./controller/product/ListProductController";
import { UpdateProductController } from "./controller/product/UpdateProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController";

import { CreateClientController } from "./controller/client/CreateClientController";
import { ListClientController } from "./controller/client/ListClientController";
import { UpdateClientController } from "./controller/client/UpdateClientController";
import { DeleteClientController } from "./controller/client/DeleteClientController";

import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";



import { AutenticationController } from "./controller/Autentication/AutenticationController";

import { ensureAuthenticated } from "./midleware/ensureAuthenticated";

import { CreatedogController } from "./controller/dog/CreatedogController";
import { ListdogController } from "./controller/dog/ListdogController";
import { UpdatedogController } from "./controller/dog/UpdatedogController";
import { DeletedogController } from "./controller/dog/DeletedogController";



const createUserController  = new CreateUserController();
const listUserController  = new ListUserController();
const updateUserController  = new UpdateUserController();
const deleteUserController  = new DeleteUserController();

const createSalesController  = new CreateSalesController();
const listSalesController  = new ListSalesController();
const updateSalesController  = new UpdateSalesController();
const deleteSalesController  = new DeleteSalesController();

const createProductController  = new CreateProductController();
const listProductController  = new ListProductController();
const updateProductController  = new UpdateProductController();
const deleteProductController  = new DeleteProductController();

const createClientController  = new CreateClientController();
const listClientController  = new ListClientController();
const updateClientController  = new UpdateClientController();
const deleteClientController  = new DeleteClientController();

const createCategoryController  = new CreateCategoryController();
const listCategoryController  = new ListCategoryController();
const updateCategoryController  = new UpdateCategoryController();
const deleteCategoryController  = new DeleteCategoryController();

const createdogController = new CreatedogController();
const listdogController = new ListdogController();
const updatedogController = new UpdatedogController();
const deletedogController = new DeletedogController();


const autenticationController = new AutenticationController();


const router = Router();

router.post("/users", createUserController.handle);
router.get("/users", listUserController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);

router.post("/sales", createSalesController.handle);
router.get("/sales", listSalesController.handle);
router.put("/sales/:id", updateSalesController.handle);
router.delete("/sales/:id", deleteSalesController.handle);

router.post("/client", createClientController.handle);
router.get("/client", listClientController.handle);
router.put("/client/:id", updateClientController.handle);
router.delete("/client/:id", deleteClientController.handle);

router.post("/product", createProductController.handle);
router.get("/product", listProductController.handle);
router.put("/product/:id", updateProductController.handle);
router.delete("/product/:id", deleteProductController.handle);

router.post("/category", createCategoryController.handle);
router.get("/category", listCategoryController.handle);
router.put("/category/:id", updateCategoryController.handle);
router.delete("/category/:id", deleteCategoryController.handle);

router.post("/dog", createdogController.handle);
router.get("/dog", listdogController.handle);
router.put("/dog/:id", updatedogController.handle);
router.delete("/dog/:id", deletedogController.handle);

router.post("/users", autenticationController.handle);
router.use(ensureAuthenticated);

export { router }