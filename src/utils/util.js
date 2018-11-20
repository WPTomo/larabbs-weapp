import moment from 'moment'
import 'moment/locale/zh-cn'

const diffForHumans = (date, format = "YYYYMMDD H:mm:ss") => {
    moment.locale('zh-cn')
    return moment(date, format).fromNow()
}

const getCurrentPageRoute = () => {
    let pages = getCurrentPages()
    let currentPage = pages[pages.length - 1]
    let route = currentPage.route

    return route
}

export default {
    diffForHumans,
    getCurrentPageRoute
}
