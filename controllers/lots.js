const Parking = require('../model/Parking')

//5e3d6037c75c8e3adc4caaac
exports.checkLots = async (req, res) => {
	const lots = await Parking.findOne({_id: '5e3d6037c75c8e3adc4caaac'})
	res.send(lots)
}

exports.updateLots = async (req, res) => {
	const { arr } = req.body
	const lots = await Parking.findOne({_id: '5e3d6037c75c8e3adc4caaac'})
	lots.arr = arr

	await lots.save()

	res.send({msg: 'done'})
}
