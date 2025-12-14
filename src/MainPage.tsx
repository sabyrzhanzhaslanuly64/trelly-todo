import { TaskList } from './components/TaskList'
import { TaskDetails } from './components/TaskDetails'

export const MainPage = () => {
  return (
    <main>
      <div style={{ display: 'flex', gap: '30px' }}>
        <TaskList />
        <TaskDetails />
      </div>
    </main>
  )
}
