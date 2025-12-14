export const TaskItem = (props) => {
  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  return (
    <li
      onClick={() => {
        props.onTaskSelected(props.task.id)
        props.setBoardId(props.task.attributes.boardId)
      }}
      style={{
        background: priorities[props.task.attributes.priority],
        border: `2px solid ${props.isSelected ? 'blue' : 'black'}`,
      }}
    >
      <p>
        <b>Заголовок: </b>
        <span style={{ textDecoration: props.task.status === 2 ? 'line-through' : 'none' }}>
              {props.task.attributes.title}
            </span>
      </p>
      <p>
        <b>Статус: </b>
        <input type="checkbox" defaultChecked={props.task.attributes.status} />
      </p>
      <p>
        <b>Дата создания задачи: </b>
        <span>{new Date(props.task.attributes.addedAt).toLocaleDateString()}</span>
      </p>
    </li>
  )
}
