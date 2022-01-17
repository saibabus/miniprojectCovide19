import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'

import './index.css'

const LineChartsOfCovid = props => {
  const {statedataAll} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}K`
    }
    return number
  }

  return (
    <div>
      <ResponsiveContainer height={400} width="100%" className="linestyles1">
        <LineChart data={statedataAll}>
          <XAxis dataKey="date" stroke="#FF073A" fontSize={10} />
          <YAxis
            stroke="#FF073A"
            tick={{
              strokeWidth: 0,
              fontSize: 10,
              fontFamily: 'Roboto',
            }}
            tickFormatter={DataFormatter}
          />

          <Tooltip cursor={{fill: 'transparent'}} />
          <Legend
            wrapperStyle={{
              paddingBottom: 20,
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Roboto',
              marginBottom: 10,
              height: '50px',
            }}
            verticalAlign="top"
            align="right"
            iconType="plainline"
            iconSize="0"
          />
          <Line
            type="monotone"
            name="Confirmed"
            dataKey="lineconfirmed"
            stroke="#FF073A"
            dot={{fill: '#FF073A'}}
          />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer height={400} width="100%" className="linestyles2">
        <LineChart data={statedataAll}>
          <XAxis dataKey="date" stroke="#007BFF" fontSize={10} />
          <YAxis
            stroke="#007BFF"
            tick={{
              strokeWidth: 0,
              fontSize: 10,
              fontFamily: 'Roboto',
            }}
            tickFormatter={DataFormatter}
          />

          <Tooltip cursor={{fill: 'transparent'}} />
          <Legend
            wrapperStyle={{
              paddingBottom: 20,
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Roboto',
              marginBottom: 10,
              height: '50px',
            }}
            verticalAlign="top"
            align="right"
            iconType="plainline"
            iconSize="0"
          />
          <Line
            type="monotone"
            name="Total Active"
            dataKey="lineactive"
            stroke="#007BFF"
            dot={{fill: '#007BFF'}}
          />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer height={400} width="100%" className="linestyles3">
        <LineChart data={statedataAll}>
          <XAxis dataKey="date" stroke="#27A243" fontSize={10} />
          <YAxis
            stroke="#27A243"
            tick={{
              strokeWidth: 0,
              fontSize: 10,
              fontFamily: 'Roboto',
            }}
            tickFormatter={DataFormatter}
          />

          <Tooltip cursor={{fill: 'transparent'}} />
          <Legend
            wrapperStyle={{
              paddingBottom: 20,
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Roboto',
              marginBottom: 10,
              height: '50px',
            }}
            verticalAlign="top"
            align="right"
            iconType="plainline"
            iconSize="0"
          />
          <Line
            type="monotone"
            name="Recovered"
            dataKey="linerecovered"
            stroke="#27A243"
            dot={{fill: '#27A243'}}
          />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer height={400} width="100%" className="linestyles4">
        <LineChart data={statedataAll}>
          <XAxis dataKey="date" stroke="#6C757D" fontSize={10} />
          <YAxis
            stroke="#6C757D"
            tick={{
              strokeWidth: 0,
              fontSize: 10,
              fontFamily: 'Roboto',
            }}
            tickFormatter={DataFormatter}
          />

          <Tooltip cursor={{fill: 'transparent'}} />
          <Legend
            wrapperStyle={{
              paddingBottom: 20,
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Roboto',
              marginBottom: 10,
              height: '50px',
            }}
            verticalAlign="top"
            align="right"
            iconType="plainline"
            iconSize="0"
          />
          <Line
            type="monotone"
            name="Deceased"
            dataKey="linedeceased"
            stroke="#6C757D"
            dot={{fill: '#6C757D'}}
          />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer height={400} width="100%" className="linestyles5">
        <LineChart data={statedataAll}>
          <XAxis dataKey="date" stroke="#9673B9" fontSize={10} />
          <YAxis
            stroke="#9673B9"
            tick={{
              strokeWidth: 0,
              fontSize: 10,
              fontFamily: 'Roboto',
            }}
            tickFormatter={DataFormatter}
          />

          <Tooltip cursor={{fill: 'transparent'}} />
          <Legend
            wrapperStyle={{
              paddingBottom: 20,
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Roboto',
              marginBottom: 10,
              height: '50px',
            }}
            verticalAlign="top"
            align="right"
            iconType="plainline"
            iconSize="0"
          />
          <Line
            type="monotone"
            name="Tested"
            dataKey="linetested"
            stroke="#9673B9"
            dot={{fill: '#9673B9'}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
export default LineChartsOfCovid
