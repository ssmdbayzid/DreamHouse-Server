exports.register = async(req, res) =>{
    try {
        console.log(req.body);
        return res
        .status(200).json({success:true, message: "Join success"})
    } catch (error) {
        return res        
        .status(500).json({success:false, message: error?.message})
    }
}

exports.login = async (req, res) =>{
    try {
        console.log(req.body);
        
        
        return res
        .status(200).json({sucess: true, message: "Log In success full", data: "result"})
    } catch (error) {
        return res
        .status(500).json({sucess: false, message: error.message})  
    }
}