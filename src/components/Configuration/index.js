import React from 'react'
import { ConfigurationContainer } from './styled'
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'

const ConfigurationOptions = [
  {
    type: 'Algorithm',
    data: [
      'Depth First Search(DFS)',
      'Breadth First Search(BFS)',
      'A*',
      'Branch and Bound'
    ]
  },
  { type: 'Animation Speed', data: ['Slow', 'Normal', 'Fast'] },
  { type: 'State Color', data: ['Default', 'Monocrhomatic', 'Random'] },
  { type: 'Lines Color', data: ['Default', 'Monocrhomatic', 'Random'] }
]
export const Configuration = () => {
  return (
    <ConfigurationContainer>
      <h1 style={{ textAlign: 'center' }}>Searching Algorithms</h1>
      <div style={{display: 'flex'}}>
      {ConfigurationOptions.map(({ type, data }) => (
        <FormControl >
          <InputLabel id={`id_${type}`}>{type}</InputLabel>
          <Select
            fullWidth
            labelId={`id_${type}`}
            style={{ marginRight: '14px', width:'250px' }}
            onChange={() => console.log('ye')}
          >
            {data.map(option => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
      </div>
    </ConfigurationContainer>
  )
}

export default Configuration
