import express from 'express';

const router = express.Router();

// api call so sending json object
router.get('/', (req, res) => {
	res.send({ data: [] })
});

export default router;