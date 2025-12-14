import { useEffect, useState } from 'react'

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

  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  return (
    <ul className="playlist">
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => {
            props.setSelectedTaskId(task.id)
            props.setBoardId(task.attributes.boardId)
          }}
          style={{
            background: priorities[task.attributes.priority],
            border: `2px solid ${task.id === props.selectedTaskId ? 'blue' : 'black'}`,
          }}
        >
          <p>
            <b>Заголовок: </b>
            <span style={{ textDecoration: task.status === 2 ? 'line-through' : 'none' }}>
              {task.attributes.title}
            </span>
          </p>
          <p>
            <b>Статус: </b>
            <input type="checkbox" defaultChecked={task.attributes.status} />
          </p>
          <p>
            <b>Дата создания задачи: </b>
            <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
          </p>
        </li>
      ))}
    </ul>
  )
}
