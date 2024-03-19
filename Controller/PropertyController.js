const Property = require("../Schema/PropertySchema")

exports.getProperties = async(req, res) =>{
 try {
    const result = await Property.find();

    console.log(result)
    return res
    .status(200).json({success: true, message:"get data success", data: result})
 } catch (error) {
    return res
    .status(500).json({success:  false, message: error.message})
 }
}

exports.getSingleProperty = async(req, res) =>{
    try {
        const id =  req.params.id;        
        const result = await Property.findById(id)
       return res
       .status(200).json({success: true, message:"get data success", data: result})
    } catch (error) {
       return res
       .status(500).json({success:  false, message: error.message})
    }
   }