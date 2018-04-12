import Moment from 'moment'
import R from 'ramda'
const ChineseLunar = require('chinese-lunar')

import 'moment/locale/zh-cn' 

const MomentRange =  require('moment-range')

const moment = MomentRange.extendMoment(Moment)

const getRange = (start, end) => moment.range(start, end)

const stepByDay = item => item.by('day', { step: 1 })

const groupByMonth = R.groupWith((a, b) => a.date === b.date)

const getLunarDay = date => ChineseLunar.solarToLunar(new Date(date), 'd')
const getLunar = date => ChineseLunar.solarToLunar(new Date(date), 'Md')

const formatDate = m => ({
  weekdays: m.weekday(),
  day: m.format('D'),
  lunarDay: getLunarDay(m.format('YYYY-MM-DD')),
  date: m.format('YYYY年M月'),
  full: m.format('YYYY-MM-DD'),
  lunar: getLunar(m.format('YYYY-MM-DD'))
  // isHoliday: ChineseHolidays(m)
})

const filterLastMonth = R.filter(R.compose(
  R.lt(1),
  R.length,
))

const formatRange = R.compose(
  filterLastMonth,
  groupByMonth,
  R.map(formatDate),
  Array.from,
  stepByDay,
  getRange
)

const getDate = FORMAT => moment().format(FORMAT)

const getLastYear = FORMAT => moment().subtract(1, 'years').format(FORMAT)
const getNextMonth = FORMAT => moment().add(1, 'months').format(FORMAT)

const indexByDate = R.indexBy(R.pipe(R.nth(0), R.prop('date')))
const zipWithKeyAndData = R.map(R.zipObj(['key', 'data']))

export const getStart = (year, month) => `${getLastYear(year)}-${getDate(month)}`
export const getEnd = (year, month) => `${getDate(year)}-${getNextMonth(month)}`
export const getSections = R.compose(
  R.map(item => ({ ...item, data: [item.data] })),
  zipWithKeyAndData,
  R.toPairs,
  indexByDate,
  formatRange
)

export default formatRange
