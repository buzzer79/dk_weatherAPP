const getData = require("./readingServingData");

exports.loadFrontPics = async(req,res)=>{
    const data = await getData.readingData();
    
    const prodPics = await data.map((val,i)=>{
        if(i <= 4){
            return {
                path: val.imgDetails[0].path.slice(23,56),
                name: val.imgDetails[0].path.substring(29,45)
            }
        }
        
    });
    prodPics.pop();

    const slidePics = await data[5].imgDetails.map((val)=>{    
        return  {
             path: val.path.slice(23,56),
             name: val.path.substring(29,45)
         }
     });

        res.render("home",{slidePics,prodPics})

};











