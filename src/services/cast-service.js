import { create } from "express-handlebars";
import Cast from "../models/Cast.js";

export default {
    create(castData){
        //TODO create cast

        return Cast.create(castData)
    }
}