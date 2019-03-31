var express = require('express');
var router = express.Router();
require('../util/util')
var User = require('../models/user');

//GET users listing
router.get('/', function (req, res, next) {
    res.send('response with a resource');
});

router.get('/test', function (req, res, next) {
    res.send('test');
});

router.post('/login', function (req, res, next) {
    var param = {
        userName: req.body.userName,
        userPwd: req.body.userPwd
    }
    User.findOne(param, function (err, doc) {
        if (err) {
            res.join({
                status: "1",
                msg: err.message
            });
        } else {
            if (doc) {
                res.cookie("userId", doc.userid, {
                    path: "/",
                    maxAge: 1000 * 60 * 60
                });
                res.cookie("userName", doc.userName, {
                    path: '/',
                    maxAge: 1000 * 60 * 60
                });
                //req.session.user = doc;
                res.json({
                    status: '0',
                    msg: '',
                    result: {
                        userName: doc.userName
                    }
                });
            }
        }
    });
});

//登出接口
router.post("/logout", function (req, res, next) {
    res.cookie("userId", "", {
        path: "/",
        maxAge: -1
    });
    res.json({
        status: "0",
        msg: '',
        result: ''
    })
});

router.get("/checkLogin", function (req, res, next) {
    if (req.cookies.userId) {
        res.json({
            status: '0',
            msg: '',
            result: req.cookies.userName || ''
        });
    } else {
        res.json({
            status: '1',
            msg: '为登录',
            result: ''
        });
    }
});

router.get("/getCartCount", function (req, res, next) {
    if (req.cookies && req.cookies.userId) {
        console.log("userId:" + req.cookikes.userId);
        var userId = req.cookies.userId;
        User.findOne({"userId": userId}, function (err, doc) {
            if (err) {
                res.json({
                    status: "0",
                    msg: err.message
                });
            } else {
                let cartList = doc.cartList;
                let cartCount = 0;
                cartList.map(function (item) {
                    cartCount += parseFloat(item.productNum);
                });
                res.json({
                    status: "0",
                    msg: "",
                    result: cartCount
                });
            }
        });
    } else {
        res.json({
            stauts: "0",
            msg: "当前用户不存在"
        });
    }
});

//查询当前用户的购物车的数据
router.get("/cartList", function (req, res, next) {
    var userId = req.cookies.userId;
    User.findOne({userId: userId}, function (err, doc) {
        if (err) {
            res.json({
                stauts: '1',
                msg: err.message,
                result: ''
            });
        } else {
            if (doc) {
                res.json({
                    status: '0',
                    msg: '',
                    result: doc.cartList
                });
            }
        }
    });
});

//购物车删除
router.post("/cartDel", function (req, res, next) {
    var userId = req.cookies.userId.productId = req.body.productId;
    User.update({
        userId: userId
    }, {
        $pull: {
            'cartList': {
                'productId': productId
            }
        }
    }, function (err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            });
        } else {
            res.json({
                stauts: '0',
                msg: '',
                result: 'suc'
            });
        }
    });
});

//修改商品数量
router.post("/cartEdit", function (req, res, next) {
    var userId = req.cookies.userId,
        productId = req.body.productId,
        productNum = req.body.productNum,
        checked = req.body.checked;
    User.update({"userId": userId, "cartList.productId": productId}, {
        "cartList.$.productNum": productNum,
        "cartList.$.checked": checked
    }, function (err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            });
        } else {
            res:json({
                status: '0',
                msg: '',
                result: 'suc'
            });
        }
    })
});

router.post("/editCheckAll", function (req, res, next) {
    var userId = req.cookies.userId,
        checkAll = req.body.checkAll ? '1' : '0';
    User.findOne({userId: userId}, function (err, user) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            });
        } else {
            if (user) {
                user.cartList.forEach((item) => {
                    item.checked = checkAll;
                })
                user.save(function (err1, doc) {
                    if (err1) {
                        res.json({
                            status: '1',
                            msg: err1.message,
                            result: ''
                        });
                    } else {
                        res.json({
                            status: '0',
                            msg: '',
                            result: 'suc'
                        });
                    }
                })
            }
        }
    });
});

//查询用户地址接口
router.get("/addressList", function (req, res, next) {
    var userId = req.cookies.userId;
    User.findOne({userID: userId}, function (err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            });
        } else {
            res.json({
                status: '0',
                msg: '',
                result: doc.addressList
            });
        }
    })
});

//设置默认的地址接口
router.post("/setDefault", function (req, res, next) {
    var userId = req.cookies.userId,
        addressId = req.body.addressId;
    if (!addressId) {
        res.json({
            status: '10003',
            msg: 'addressId is null',
            result: ''
        });
    } else {
        User.findOne({userId: userId}, function (err, doc) {
            if (err) {
                res.json({
                    status: '1',
                    msg: err.message,
                    result: ''
                });
            } else {
                var addressList = doc.addressList;
                addressList.forEach((item) => {
                    if (item.addressId == addressId) {
                        item.isDefault = true;
                    } else {
                        item.isDefault = false;
                    }
                });
                doc.save(function (err1, doc1) {
                    if (err) {
                        res.json({
                            status: '1',
                            msg: err.message,
                            result: ''
                        });
                    } else {
                        res.json({
                            status: '0',
                            msg: '',
                            result: ''
                        })
                    }
                })
            }
        })
    }
})

//删除地址接口
router.post("/delAddress", function (req, res, next) {
    var userId = req.cookies.userId, addressId = req.body.addressId;
    User.update({
        userId: userId
    }, {
        $pull: {
            'addressList': {
                'addressId': addressId
            }
        }
    }, function (err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            });
        } else {
            res.json({
                status: '0',
                msg: '',
                result: ''
            });
        }
    })
})

//加入购物车
router.post("/addCart", function (req, res, next) {
    var userId = "100000099", productId = req.body.productId;
    var User = require("../models/user");
    User.findOne({userId: userId}, function (err, userDoc) {
        if (err) {
            res.json({
                status: "1",
                msg: err.message
            })
        } else {
            console.log("userDoc:" + userDoc);
            if (userDoc) {
                var goodsItem = '';
                userDoc.cartList.forEach(function (item) {
                    if (item.productId == productId) { //如果存在相同 的商品的话 直接++
                        goodsItem = item;
                        item.productNum++;
                    }
                });
                if (goodsItem) { //如果存在直接保存这些信息
                    userDoc.save(function (err2, doc2) {
                        if (err2) {
                            res.json({
                                status: "1",
                                msg: err2.message
                            })
                        } else {
                            res.json({
                                status: '0',
                                msg: '',
                                result: 'suc'
                            })
                        }
                    })
                } else {
                    Goods.findOne({productId: productId}, function (err1, doc) {
                        if (err1) {
                            res.json({
                                status: "1",
                                msg: err1.message
                            })
                        } else {
                            if (doc) {
                                doc.productNum = 1; //初始化数据
                                doc.checked = 1;
                                userDoc.carList.push(doc);
                                userDoc.save(function (err2, doc2) {
                                    if (err2) {
                                        res.json({
                                            status: "1",
                                            msg: err2.message
                                        })
                                    } else {
                                        res.json({
                                            status: '0',
                                            msg: '',
                                            result: 'suc'
                                        })
                                    }
                                })
                            }
                        }
                    })
                }
            }
        }
    })
});

module.exports = router;

