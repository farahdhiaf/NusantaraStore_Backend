const shipmentService = require('../services/shipmentService')

const getAllShipment = (req, res) => {
    shipmentService.getAllShipment()
    .then(shipment => {
        if(!shipment){
            res.status(400).json({
                status: 'error',
                message: 'Shipment not found',
                data: shipment
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success get all list shipment',
            data: shipment
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}

const createShipment = (req, res) => {
    const data = req.body;
    shipmentService.createShipment(data)
    .then(shipment => {
        if(!shipment){
            res.status(400).json({
                status: 'error',
                message: 'Failed create shipment',
                data: shipment
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create shipment',
            data: shipment
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}

const updateShipment = (req, res) => {
    shipmentService.updateShipment(req.params.id, req.body)
      .then((shipment) => {
        if(!shipment){
            res.status(400).json({
                status: 'error',
                message: 'Shipment not found',
                data: shipment
            })
        }
        res.status(200).json({
          status: "success",
          message: "shipment updated successfully",
          data: shipment,
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: error.message,
          data: error,
        });
      });
  };


const deleteShipment = (req, res) => {
    shipmentService.deleteShipment(req.params.id)
      .then((shipment) => {
        if(!shipment){
            res.status(400).json({
                status: 'error',
                message: 'Shipment not found',
                data: shipment
            })
        }
        res.status(200).json({
          status: "success",
          message: "shipment deleted successfully",
          data: shipment,
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: error.message,
          data: error,
        });
      });
  };

  module.exports = {
    getAllShipment,
    createShipment,
    updateShipment,
    deleteShipment
}

