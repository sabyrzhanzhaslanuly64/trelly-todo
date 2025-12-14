import { useEffect, useState } from 'react'

export const TaskDetails = (props) => {
  const [selectedTask, setSelectedTask] = useState(null)

  useEffect(() => {
    if (!props.selectedTaskId) return setSelectedTask(null)

    fetch(
      `https://trelly.it-incubator.app/api/1.0/boards/${props.boardId}/tasks/${props.selectedTaskId}`,
      {
        headers: {
          'api-key': import.meta.env.VITE_API_KEY,
        },
      },
    )
      .then(res => res.json())
      .then(json => setSelectedTask(json.data))
  }, [props.selectedTaskId])

  return (
    <div className="task-details">
      <h2>Task details</h2>

      {!props.selectedTaskId && <p>Task is not selected</p>}

      {props.selectedTaskId && !selectedTask && <p>Loading...</p>}

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
