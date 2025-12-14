import { TaskList } from './components/TaskList'
import { TaskDetails } from './components/TaskDetails'
import { useState } from 'react'

export const MainPage = () => {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [boardId, setBoardId] = useState<string | null>(null)

  return (
    <main>
      <div style={{ display: 'flex', gap: '30px' }}>
        <TaskList
          selectedTaskId={selectedTaskId}
          setSelectedTaskId={setSelectedTaskId}
          setBoardId={setBoardId}
        />
        <TaskDetails
          selectedTaskId={selectedTaskId}
          boardId={boardId}
        />
      </div>
    </main>
  )
}
