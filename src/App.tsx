import { useEffect, useState } from 'react'

export const App = () => {
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    })
  }, [])

  if (tasks === null) return <h1>Загрузка...</h1>

  if (tasks.length === 0) return <h1>Задачи отсутствуют</h1>

  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  return (
    <>
      <button onClick={() => setSelectedTaskId(null)}>Сбросить выделение</button>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => setSelectedTaskId(task.id)}
            style={{
              background: priorities[task.priority],
              border: `2px solid ${task.id === selectedTaskId ? 'blue' : 'black'}`,
            }}
          >
            <p>
              <b>Заголовок: </b>
              <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            </p>
            <p>
              <b>Статус: </b>
              <input type="checkbox" defaultChecked={task.isDone} />
            </p>
            <p>
              <b>Дата создания задачи: </b>
              <span>{task.addedAt}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}
