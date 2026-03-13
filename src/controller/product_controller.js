const product_controller_v1 = ( req, res) => {

     res.json( {
          success:"true",
          message:"hello! from api/v1/prodcut",
          data:"null"
     });
};


const product_controller_v2 = ( req, res)=> {
          
      res.json( {
          success:"true",
          message:"hello! from api/v2/prodcut",
          data:"null"
     });

};


// now export

module.exports = {
    product_controller_v1,
    product_controller_v2
}
