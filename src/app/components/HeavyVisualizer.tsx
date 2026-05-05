"use client"
import _ from 'lodash';
import moment from 'moment';
import { Chart } from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import momentTimezone from 'moment-timezone';
import { Play, Pause } from 'lucide-react';
import { Play as PhPlay, Pause as PhPause } from '@phosphor-icons/react';

export default function HeavyVisualizer() {

  const now = moment().format('LL');
  const tz = momentTimezone.tz("America/New_York").format();

  const chartRef = useRef<HTMLCanvasElement>(null);

  const data = _.range(1, 11).map(num => ({
    x: moment().add(num, 'days').format('MMM DD'),
    y: _.random(1, 100),
  }));

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: data.map(d => d.x),
          datasets: [{ label: 'Random Scale', data: data.map(d => d.y) }]
        }
      });
    }
  }, [data]);

  return (
    <div className="p-10 border rounded-xl bg-gray-50">
      <h2 className="text-xl font-bold">Heavy Analytics Component</h2>
      <p>Rendered at: {moment().format('LLLL')}</p>
      <canvas ref={chartRef} />
      <div className="p-8 border">
        <div className="flex gap-4 mb-4">
          {/* Using two different icon sets for the same UI element */}
          <Play size={24} /> <PhPlay size={24} />
          <Pause size={24} /> <PhPause size={24} />
        </div>
        <p>Moment: {now}</p>
        <p>Timezone: {tz}</p>
      </div>
    </div>
  );
}