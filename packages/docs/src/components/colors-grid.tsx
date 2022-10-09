import { getContrast } from 'polished'

import { colors } from '@renato-ignite-ui/tokens'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div
        key={key}
        style={{
          backgroundColor: color,
          padding: '2rem',
        }}
      >
        <p
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </p>
      </div>
    )
  })
}
