const express = require('express');

const connection = require('../connector');

const router = express.Router();



/**
 * @swagger
 * /:
 *   get:
 *     summary: Fetch orders with pagination
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of records to fetch
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Number of records to skip
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 */



router.get('/' , (req, res)=>{
    let { limit, offset } = req.query;
  
    // Validate limit and offset
    limit = parseInt(limit, 10);
    offset = parseInt(offset, 10);
  
    if (isNaN(limit) || limit <= 0) {
      limit = 10; // Default value
    }
    if (isNaN(offset) || offset < 0) {
      offset = 0; // Default value
    }
  
    // SQL Query with LIMIT and OFFSET
    const query = `SELECT * FROM orders LIMIT ${limit} OFFSET ${offset}`;
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Failed to fetch data:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json(results);
      }
    });
})

module.exports = router;