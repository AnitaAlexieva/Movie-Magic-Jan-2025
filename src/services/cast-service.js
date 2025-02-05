import { create } from "express-handlebars";
import Cast from "../models/Cast.js";

export default {

    getALL(filter = {}){
      let query = Cast.find({})

      if(filter.exclude){
        //монгус вариянт
        // query = query.find({_id: {$nin: filter.exclude}})

        //монго ДБ вариянт
        query = query.nin('_id', filter.exclude)
      }
      return query
      //   return Cast.find({})
    },
    create(castData){
        //TODO create cast

        return Cast.create(castData)
    }
}