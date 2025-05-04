import mongoose, { Types } from "mongoose";
import { spendModel } from "../model/spend.model.js"

export const registerSpendService = async (spendData) => {
   const spendCreated = await spendModel.create(spendData);
   return spendCreated;
}

export const getSpendsByCategoriesService = async (userId) => {
   const objectIdConsulta = new mongoose.Types.ObjectId(userId);
   const spends = await spendModel.aggregate([
      {
         $match: {
            'user': objectIdConsulta
         }
      },
      {
         $lookup: {
            'from': 'categories',
            'localField': 'category',
            'foreignField': '_id',
            'as': 'category'
         }
      },
      {
         $unwind: {
            'path': '$category',
            'includeArrayIndex': 'string'
         }
      },
      {
         $group: {
            '_id': '$category.name',
            'gastosPorCategoria': {
               '$sum': 1
            }
         }
      }
   ]
   )

   return spends;
}

export const getLastSpendUserService = async (userId) => {
   const spend = await spendModel.findOne({ user: userId }, {}, { sort: { '_id': -1 } }).populate("category");
   return spend;
}
export const getActivitiesSpendService = async (userId) => {
   const objectIdConsulta = new mongoose.Types.ObjectId(userId);
   const spendsActivities = await spendModel.aggregate([
      {
         $match: {
            user: objectIdConsulta
         }
      },
      {
         $group: {
            _id: {
               $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
            },
            totalGasto: { $sum: "$amount" }, // Sumar el campo que deseas (ejemplo: "amount")
            cantidadGastos: { $sum: 1 }
         }
      },
      {
         $sort: {
            _id: 1 // Orden ascendente por fecha (1 para ascendente, -1 para descendente)
         }
      }
   ])
   return spendsActivities;
}

export const getSpendUserByIdService = async (userId) => {
   const spends = await spendModel.find({ user: userId }).populate("category")
   return spends;
}

export const getStadisticsSpendService = async () => {
   const categories = await spendModel.find({}).populate("category");
   return categories;
}
