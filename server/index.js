import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import { latestmodel } from "./models/latest.model.js";
import cors from 'cors'
import { ProductModel } from "./models/services.model.js";
import { FormModel } from "./models/formdata.model.js";
import { ReviewModel } from "./models/review.model.js";
import { ContModel } from "./models/Contact.model.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.DB_URI)
.then(()=>console.log("database connected"));

cloudinary.config({
    cloud_name:"dukqkbwhz",
    api_key:"496747327975573",
    api_secret:"Bzoakk22tlLj7T-mkpsGi_CSG6g",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'pshop',
    format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => file.name + '-' + Date.now()
  },
});

const upload = multer({ storage , limits: {fileSize:5*1024*1024}});

//upload image in cloud space
app.post("/upload",upload.single("file"),(req,res)=>{
  const {originalname:name,path} = req.file;
  let latest = new latestmodel({
      name:name,
      path:path
  })
  latest.save().then(()=>{
    console.log(req.file);  
  res.send("file uploaded successfully");
  }).catch((err)=>{
    console.log(err)
  })
})

//delete banner
app.delete("/delete-banner/:id" , async (req,res)=>{
  let delid = req.params.id;
   await latestmodel.deleteOne({_id:delid})
  .then(()=>{
    res.send({
       status:1,
       msg:"deleted",   
    })
  }).catch((err)=>{
    console.log(err);
  })
})

//get path of image
app.get('/banners',async (req,res)=>{
  let items = await latestmodel.find();
  res.send(
    {
      status:1,
      items
    }
  )
})

//upload product
app.post("/upload-product",upload.single("file"),(req,res)=>{
  const {originalname:name,path} = req.file;
  const {title,about,price} = req.body;

  let products = new ProductModel({
    name:name,
    path:path,
    title:title,
    about:about,
    price:price
  })

  products.save()
  .then(()=>{
    console.log(req.file)
     res.send("file uploaded")
  }).catch((err)=>{
    console.log(err)
  })
})


//all products
app.get("/all-products",async (req,res)=>{
  let products = await ProductModel.find();
  res.send({
    status:1,
    msg:"all products",
    products
  })
})

//find one product
app.get("/one-product/:id" , async (req,res)=>{
   let pRid = req.params.id;
   let PrRes = await ProductModel.findOne({_id:pRid});
   res.send({
    status:1,
    msg:"Data found",
    PrRes
   })
})

//update product
app.put("/update-product/:id",async (req,res) => {
  let upId = req.params.id;
  let {title,about,price} = req.body;

  let updObj = ({
    title:title,
    about:about,
    price:price
  })
   
  let updateRes = await ProductModel.updateOne({_id:upId},updObj);
  res.send({
    status:1,
    msg:"product updated",
    updateRes
  })
})
//delete product
app.delete("/delete-product/:id", async (req,res)=>{
  let prId = req.params.id;
  await ProductModel.deleteOne({_id:prId})
  .then(()=>{
    res.send("one product deleted");
  }).catch((err)=>{
    console.log(err);
  })
})

//online form details 
app.post('/form-details',(req,res)=>{
  const {title , about , document , price} = req.body;
  
  let formData = new FormModel({
    title:title,
    about:about,
    document:document,
    price:price
  })

  formData.save()
  .then(()=>{
    res.send("data uploaded successfully");
  }).catch((err)=>{
    console.log(err)
  })

})

//all form details
app.get('/get-formdetails',async (req,res) => {
    let details = await FormModel.find();
    res.send({
      status:1,
      msg:"all details",
      details
    })
})

//delete forms 
app.delete("/delete-form/:id",async (req,res)=>{
  let delid = req.params.id;
  await FormModel.deleteOne({_id:delid})
  .then(()=>{
    res.send({
      status:1,
      msg:"deleted"
    })
  }).catch((err)=>{
    console.log(err);
  })
})

//review 
app.post('/review',(req,res)=>{
  const {name,says} = req.body;

  let reviews = new ReviewModel({
    name:name,
    says:says
  })
 reviews.save()
 .then(()=>{
  res.send({
    msg:"data saved"
  })
 }).catch((err)=>{
  console.log(err);
 })
})

app.get("/all-reviews",async (req,res)=>{
  let reviews = await ReviewModel.find();
  res.send({
    status:1,
    msg:"all reviews",
    reviews
  }) 
})

//delete review
app.delete("/delete-review/:id",async (req,res)=>{
  let delreid = req.params.id;
  await ReviewModel.deleteOne({_id:delreid})
  .then(()=>{
    res.send("review deleted")
  }).catch((err)=>{
    console.log(err);
  })  
})

//uploal constact
app.post('/upload-contact',(req,res)=>{
  const {name,email,phone,address,message} = req.body;

  let data = new ContModel({
    name,
    email,
    phone,
    address,
    message,
  })

  data.save()
  .then(()=>{
    res.send("data saved")
  }).catch((err)=>{
    console.log(err);
  })
})

//all constact data 
app.get('/contacts',async (req,res)=>{
  let contcats = await ContModel.find();
  res.send({
    status:1,
    mag:"All contacts",
    contcats
  })
})

//delete contacts
app.delete("/delete-contact/:id" , async (req,res)=>{
    let delCid = req.params.id;
    await ContModel.deleteOne({_id:delCid})
    .then(()=>{
      res.send("one contact deleted");
    }).catch((err)=>{
       console.log(err);
    })
})

app.get('/',(req,res)=>{
    res.send(
        {
            status:1,
            msg:"hello"
        }
    )
})
app.listen(process.env.PORT || 5000,()=>{
    console.log("server is listning on port 3000");
})
