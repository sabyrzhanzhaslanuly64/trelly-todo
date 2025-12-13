import { useEffect, useState } from 'react'

export const App = () => {
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [selectedTask, setSelectedTask] = useState(null)
  const [taskDetails, setTaskDetails] = useState(null)
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then(res => res.json())
      .then(json => setTasks(json.data))
  }, [])

  useEffect(() => {
    if (!selectedTask) return

    fetch(
      `https://trelly.it-incubator.app/api/1.0/boards/${selectedTask.attributes.boardId}/tasks/${selectedTask.id}`,
      {
        headers: {
          'api-key': import.meta.env.VITE_API_KEY,
        },
      },
    )
      .then(res => res.json())
      .then(json => setTaskDetails(json.data))
  }, [selectedTask])

  if (!tasks) return <h1>Загрузка...</h1>

  if (tasks.length === 0) return <h1>Задачи отсутствуют</h1>

  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  return (
    <>
      <button
        onClick={() => {
          setSelectedTaskId(null)
          setTaskDetails(null)
        }}
      >
        Сбросить выделение
      </button>

      <div style={{ display: 'flex', columnGap: '30px' }}>
        <ul className="playlist">
          {tasks.map((task) => (
            <li
              key={task.id}
              onClick={() => {
                setSelectedTaskId(task.id)
                setSelectedTask(task)
              }}
              style={{
                background: priorities[task.attributes.priority],
                border: `2px solid ${task.id === selectedTaskId ? 'blue' : 'black'}`,
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
        <div className="task-details">
          <h2>Task details</h2>

          {!taskDetails && <p>Task is not selected</p>}

          {selectedTask && !taskDetails && <p>Loading...</p>}

          {taskDetails && (
            <div>
              <p>
                <b>Title: </b>
                {taskDetails.attributes.title}
              </p>
              <p>
                <b>Board title: </b>
                {taskDetails.attributes.boardTitle}
              </p>
              <p>
                <b>Description: </b>
                {taskDetails.attributes.description || 'no description'}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
