import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { TaskDetails } from './components/TaskDetails'
import { Footer } from './components/Footer'

export const MainPage = () => {
  return (
    <main>
      <Header />
      <div style={{ display: 'flex', gap: '30px' }}>
        <TaskList />
        <TaskDetails />
      </div>
      <Footer />
    </main>
  )
}
