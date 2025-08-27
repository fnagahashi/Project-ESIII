import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUserController } from "./controller/user/ListUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";

import { DeleteSalesController } from "./controller/sales/DeleteSalesController";
import { UpdateSalesController } from "./controller/sales/UpdateSalesController";
import { ListSalesController } from "./controller/sales/ListSalesController";
import { CreateSalesController } from "./controller/sales/CreateSalesController";

import { CreateProductController } from "./controller/books/CreateProductController";
import { ListProductController } from "./controller/books/ListProductController";
import { UpdateProductController } from "./controller/books/UpdateProductController";
import { DeleteProductController } from "./controller/books/DeleteProductController";

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

import { CreateAddressController } from "./controller/Address/CreateAddressController";
import { DeleteAddressController} from "./controller/Address/DeleteAddressController";
import {ListAddressController} from "./controller/Address/ListAddressController";
import {UpdateAddressController} from "./controller/Address/UpdateAddressController";



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

const createAddressController = new CreateAddressController();
const listAddressController = new ListAddressController();
const updateAddressController = new UpdateAddressController();
const deleteAddressController = new DeleteAddressController();

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

router.post("/address", createAddressController.handle);
router.get("/address", listAddressController.handle);
router.put("/address/:id", updateAddressController.handle);
router.delete("/address/:id", deleteAddressController.handle);

router.post("/users", autenticationController.handle);
router.use(ensureAuthenticated);

export { router }