const { getForm, postData, LoginAdmin, AdminDashboardPost,AdminDashboardGet, deleteData, displayInfo } = require('../Controller/FormController');

const route = require('express').Router();

route.get('/GiveawayForm',getForm)

route.post('/GiveawayFormPost',postData)

route.post('/AdminDashboard',AdminDashboardPost)

route.get('/AdminDashboard',AdminDashboardGet)

route.get('/AdminLogin',LoginAdmin)

route.get('/delete',deleteData)

route.get('/view',displayInfo)

module.exports = route;