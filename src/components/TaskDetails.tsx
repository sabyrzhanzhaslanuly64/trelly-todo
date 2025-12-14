import { useEffect, useState } from 'react'

type TaskAttributes = {
  title: string
  boardTitle: string
  boardId: string
  priority: number
  description: string | null
  status: number
  addedAt: string
  attachments: string[]
}

export type Task = {
  id: string
  type: 'tasks'
  attributes: TaskAttributes
}

type Props = {
  selectedTaskId: string | null
  boardId: string | null
}

export const TaskDetails = ({ selectedTaskId, boardId }: Props) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  useEffect(() => {
    if (!selectedTaskId || !boardId) {
      setSelectedTask(null)
      return
    }

    fetch(
      `https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`,
      {
        headers: {
          'api-key': import.meta.env.VITE_API_KEY,
        },
      },
    )
      .then(res => res.json())
      .then(json => setSelectedTask(json.data))
  }, [selectedTaskId, boardId])

  return (
    <div className="task-details">
      <h2>Task details</h2>

      {!selectedTaskId && <p>Task is not selected</p>}

      {selectedTaskId && !selectedTask && <p>Loading...</p>}

      {selectedTask && (
        <div>
          <p><b>Title:</b> {selectedTask.attributes.title}</p>
          <p><b>Board title:</b> {selectedTask.attributes.boardTitle}</p>
          <p><b>Description:</b> {selectedTask.attributes.description || 'no description'}</p>
        </div>
      )}
    </div>
  )
}
