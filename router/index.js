const express = require('express');
const router = express.Router();
const db = require('../models');
const Film = db.Film;

router.get('/api/films', async (req, resp) => {
	let films;
	if (req.query.author) {
		films = await Film.findAll({
			where: {
				author: req.query.author,
			},
		});
	} else {
		films = await Film.findAll();
	}

	return resp.json({ data: films });
});

router.get('/api/films/:id', async (req, resp) => {
	const film = await Film.findByPk(req.params.id);

	if (!film) return resp.status(404).json({ message: 'Data not found' });

	return resp.json({ data: film });
});

module.exports = router;
