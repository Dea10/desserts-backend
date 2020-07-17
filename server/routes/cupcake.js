const express = require('express');
// const _ = require('underscore');
const Cupcake = require('../model/cupcake');
const app = express();

app.get('/cupcake', function (req, res) {

    let from = req.query.from || 0;
    from = Number(from);

    let limit = req.query.limit || 10;
    limit = Number(limit);

    Cupcake.find({status: true}, 'name desc img price stock status')
        .skip(from)
        .limit(limit)
        .exec((err, cupcakes) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    err
                });
            }

            Cupcake.countDocuments({status: true}, (err, count) => {
                
                res.json({
                    ok: true,
                    cupcakes: cupcakes,
                    count
                })
            })

        })
})

app.post('/cupcake', function (req, res) {
    let body = req.body

    let cupcake = new Cupcake({
        name: body.name,
        desc: body.desc,
        img: body.img,
        price: body.price,
        stock: body.stock,
        status: body.status
    });

    cupcake.save((err, cupcakeDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            cupcake: cupcakeDB
        })
    });
})

// app.put('/user/:id', function (req, res) {
//     let id = req.params.id;
//     let body = _.pick(req.body, ['name', 'email', 'img', 'role', 'status']);

//     User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userDB) => {

//         if (err) {
//             res.status(400).json({
//                 ok: false,
//                 err
//             });
//         }

//         res.json({
//             ok: true,
//             user: userDB
//         })
//     });
// })

// app.delete('/user/:id', function (req, res) {
    
//     let id = req.params.id;
//     let body = {
//         status: false
//     }

//     User.findByIdAndUpdate(id, body, {new: true}, (err, deletedUser) => {
//         if (err) {
//             res.status(400).json({
//                 ok: false,
//                 err
//             });
//         }

//         res.json({
//             ok: true,
//             deletedUser
//         })
//     });
// })

module.exports = app;