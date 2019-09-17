
db.Product_list.find(
  {"price_grn": 
    {$lt: 800}
  }
).pretty()


db.Product_list.find(
  {"prod_cat": DBRef("Product_categories", "2")}).pretty()


db.Product_categories.find({}, {"name": 1})


db.Product_list.aggregate(
  {$group: 
    {_id: "$prod_cat", minPrice:
      {$min: "$price_grn"}
    }
  },
  {$sort: 
    {minPrice: 1}
  },
  {$limit: 1})


db.Product_list.aggregate(
  {$match:
    {"wholesale_price_grn":
      {$lt: 1300}
    }
  },
  {$match:
    {"wholesale_price_grn":
      {$gt: 850}
    }
  }).
pretty()