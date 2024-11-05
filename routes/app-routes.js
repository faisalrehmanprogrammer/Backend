const express = require("express");
const Test = require("../controller/test-controller");
const { CreateUser, LoginUser } = require("../controller/auth-controller");
const { AdminCreateUser, AdminUpdateUser, AdminFetchUser, AdminDeleteUser } = require("../controller/admin-cotroller");
const { Fetchallblog, FilterBlog } = require("../controller/user-controlller");
const router = express.Router();


router.get("/test", Test)
router.post('/create', CreateUser)
router.post('/login', LoginUser)
// admin routes
router.post('/admin-create', AdminCreateUser)
router.put('/admin-update', AdminUpdateUser)
router.get('/admin-fetch', AdminFetchUser)
router.delete('/admin-delete', AdminDeleteUser)

// user routes
router.get("/blogs-all", Fetchallblog)
router.get("/filter-blog", FilterBlog)




// Testing
//  router.get("/test-req", GetBlogs)






module.exports = router;