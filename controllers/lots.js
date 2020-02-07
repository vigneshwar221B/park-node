const Parking = require('../model/Parking')

exports.checkLots = async (req, res) => {
	const lots = await Parking.find({})
	res.send(lots)
}

exports.updateLots = async (req, res) => {
	const { arr } = req.body

	const parking = new Parking({
		arr,
	})

	await parking.save()

	res.send({msg: 'done'})
}
