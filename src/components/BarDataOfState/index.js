import {
  Bar,
  BarChart,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from 'recharts'

import './index.css'

const BarDataOfState = props => {
  const {statedataAll, cardSelect} = props
  const barDataforEach = statedataAll.slice(0, 10)

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const data = []
  barDataforEach.forEach(eachone => {
    if (eachone[cardSelect]) {
      data.push({
        date: eachone.date,
        count: eachone[cardSelect],
      })
    }
  })

  const updatedcountdata = data.map(eachoneis => {
    if (eachoneis.count > 100000) {
      const valueis = `${(eachoneis.count / 100000).toFixed(2)}L`
      return {...eachoneis, countupdate: valueis}
    }
    if (eachoneis.count > 1000) {
      const valueis = `${(eachoneis.count / 1000).toFixed(2)}K`
      return {...eachoneis, countupdate: valueis}
    }
    return eachoneis
  })

  console.log(barDataforEach)
  console.log(updatedcountdata)

  const DataFormatterfordate = date => {
    const dateis = new Date(date)
    const updatedone = `${dateis.getDate()} ${months[dateis.getMonth()]}`
    return updatedone
  }

  return (
    <div className="barContainer">
      <ResponsiveContainer height={400} width="100%">
        <BarChart data={updatedcountdata}>
          <XAxis
            dataKey="date"
            axisLine={false}
            ticks={false}
            tick={{
              strokeWidth: 1,
              fontSize: 10,
              fontFamily: 'Roboto',
            }}
            tickFormatter={DataFormatterfordate}
          />

          <Tooltip cursor={{fill: 'transparent'}} />

          <Bar
            dataKey="count"
            className={`labelsizeis n${cardSelect}`}
            radius={[10, 10, 0, 0]}
          >
            <LabelList
              position="top"
              className={`labelsizeis n${cardSelect}`}
              dataKey="countupdate"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default BarDataOfState
