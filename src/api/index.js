import ajax from './ajax'

const  BASE = '/api'

//1、Home、Classify页面顶部搜到的产品的总数量
export const reqTotalNumbersOfProducts = () => ajax(BASE + '/xhr/search/getTotalNumbersOfProducts.json', 'POST')

//2、Discern页面导航tab
export const reqDiscernTabs = () => ajax(BASE + '/topic/v1/find/getTabs.json')
//3、Discern的Cross组件手册指南部分
export const reqManual = () => ajax(BASE + '/topic/v1/find/recManual.json')

//地址栏中：
//首页的搜索
//http://m.you.163.com/search?fromPage=index
//分类页面的搜索
//http://m.you.163.com/search?fromPage=catelist
//识物页面的搜索 / 登录页面的搜素
//http://m.you.163.com/search

//共同的发送请求地址：
//http://m.you.163.com/xhr/search/init.json

//一上来显示的关键词接口
export const reqSearch = () => ajax(BASE + '/xhr/search/init.json', 'POST')

//搜索框关键字模糊匹配接口：
export const reqSearchComplete = (keywordPrefix) => ajax(BASE + '/xhr/search/searchAutoComplete.json?csrf_token=0a53e4e466cdd15541878c1424d5a525', {keywordPrefix})

//由value产生历史记录的接口
export const reqValueHistory = (directOrginQuery) => ajax(BASE + '/xhr/search/search.json?keyword='+ directOrginQuery)

//识物组件 上拉加载
export const reqUpLoading = () => ajax(BASE + '/topic/v1/find/recAuto.json?page=2&size=5')


//mock数据
//1、Classify页面tab、list部分
export const reqClassify = () => ajax('/classify')    //是mock的路径