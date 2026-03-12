const homeController =   (req, res)=> {

      console.log('im called from homeController.js file present in controller folder');

    return res.status(200).json({
         success:"true",
         message:"this route is working fine...",
         data:"null"  
    });
}

module.exports = {
     homeController
}