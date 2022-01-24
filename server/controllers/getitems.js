const { user, item, review } = require('../models');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

module.exports = async (req, res) => {
  const query = req.query.itemid;

  if (!query) {
    const itemList = await item.findAll({
      order: [[review, 'createdAt', 'DESC']],
      include: [{ model: review, required: true }]
    });
    const recentItemList = itemList.slice(0, 5);
    const payloadArray = [];
    for (const recentitem of recentItemList) {
      const recentreview = recentitem.reviews[0];
      const recentnick = await user.findOne({
        where: { id: recentreview.userId }
      });

      const payload = {
        itemid: recentitem.id,
        itemname: recentitem.name,
        price: recentitem.price,
        content: recentitem.content,
        score: '2', // 평점 평균값  집어넣을것
        photo: recentitem.img,
        review: {
          reviewid: recentreview.id,
          nickname: recentnick.nickname,
          content: recentreview.content,
          score: recentreview.score,
          createdAt: recentreview.createdAt,
          updatedAt: recentreview.updatedAt
        }
      };
      payloadArray.push(payload);
    }
    res.json({ data: payloadArray });
  } else {
    item.findAll({
      where: {
        name: {
          [Op.like]: '%' + query + '%'
        }
      }
    })
      .then(result => {
        res.json({ data: result, message: 'Found itemAll' });
      }).catch(err => console.log(err));
  }
};

// 끝

/*
[Op.and]: {a: 5}           // AND (a = 5)
[Op.or]: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
[Op.gt]: 6,                // > 6
[Op.gte]: 6,               // >= 6
[Op.lt]: 10,               // < 10
[Op.lte]: 10,              // <= 10
[Op.ne]: 20,               // != 20
[Op.eq]: 3,                // = 3
[Op.not]: true,            // IS NOT TRUE
[Op.between]: [6, 10],     // BETWEEN 6 AND 10
[Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
[Op.in]: [1, 2],           // IN [1, 2]
[Op.notIn]: [1, 2],        // NOT IN [1, 2]
[Op.like]: '%hat',         // LIKE '%hat'
[Op.notLike]: '%hat'       // NOT LIKE '%hat'
[Op.iLike]: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
[Op.notILike]: '%hat'      // NOT ILIKE '%hat'  (PG only)
[Op.regexp]: '^[h|a|t]'    // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
[Op.notRegexp]: '^[h|a|t]' // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
[Op.iRegexp]: '^[h|a|t]'    // ~* '^[h|a|t]' (PG only)
[Op.notIRegexp]: '^[h|a|t]' // !~* '^[h|a|t]' (PG only)
[Op.like]: { [Op.any]: ['cat', 'hat']}
                       // LIKE ANY ARRAY['cat', 'hat'] - also works for iLike and notLike
[Op.overlap]: [1, 2]       // && [1, 2] (PG array overlap operator)
[Op.contains]: [1, 2]      // @> [1, 2] (PG array contains operator)
[Op.contained]: [1, 2]     // <@ [1, 2] (PG array contained by operator)
[Op.any]: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)

[Op.col]: 'user.organization_id' // = "user"."organization_id", with dialect specific column identifiers, PG in this example
*/
