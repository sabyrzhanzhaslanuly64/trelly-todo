import { useEffect, useState } from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = (props) => {
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then(res => res.json())
      .then(json => setTasks(json.data))
  }, [])

  if (!tasks) return <h1>Загрузка...</h1>

  if (tasks.length === 0) return <h1>Задачи отсутствуют</h1>

  return (
    <ul className="playlist">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isSelected={task.id === props.selectedTaskId}
          onTaskSelected={props.setSelectedTaskId}
          setBoardId={props.setBoardId}
        />
      ))}
    </ul>
  )
}
