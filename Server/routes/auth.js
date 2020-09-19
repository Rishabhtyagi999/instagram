const express = require('express');
const { model } = require('mongoose');
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../key')
const requirelogin = require('../middleware/requirelogin');


router.post('/signup', (request, response) => {
    const { name, email, password } = request.body
    if (!email || !password || !name) {

        return response.status(422).json({ error: "Please add all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return response.status(422).json({ error: "User already exists with that email" })

            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        email,
                        password: hashedpassword,
                        name
                    })

                    user.save()
                        .then(user => {
                            response.json({ message: "Congrat! Successfully Saved" })

                        })
                        .catch(err => {
                            console.log(err);
                        })

                })

        })
        .catch(err => {
            console.log(err);
        })
})

router.post('/login', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).json({ error: "Please Provide add email or password" })

    }
    User.findOne({ email: email })
        .then(savadUser => {
            if (!savadUser) {
                return res.status(422).json({ error: "Invalid Email or Password" })

            }
            bcrypt.compare(password, savadUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        const token = jwt.sign({ _id: savadUser._id }, JWT_SECRET)
                        const{_id,name,email}=savadUser
                        res.json({ token,user:{_id,name,email}})
                            

                    } else {
                        return res.status(422).json({ error: "Invalid Email or Password" })


                    }
                })
                .catch(err => {
                    console.log(err)

                })
        })
})

module.exports = router