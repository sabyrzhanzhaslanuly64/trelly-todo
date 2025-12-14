export const TaskItem = ({ task, isSelected, onTaskSelected, setBoardId }) => {
  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  return (
    <li
      onClick={() => {
        onTaskSelected(task.id)
        setBoardId(task.attributes.boardId)
      }}
      style={{
        background: priorities[task.attributes.priority],
        border: `2px solid ${isSelected ? 'blue' : 'black'}`,
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
  )
}
