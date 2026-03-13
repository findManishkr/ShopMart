
const home_controller_v1 = ( req, res ) => {

     res.status(200).json( {
            success:"true",
            message:"hello! from /api/v1/home",
            data:"null"
     });
}

const home_controller_v2 = ( req, res) => {

     res.status(200).json( {
            success:"true",
            message:"hello! from /api/v2/home",
            data:"null"
     })
}


module.exports = {
      home_controller_v1,
      home_controller_v2
}