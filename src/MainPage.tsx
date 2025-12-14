import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { TaskDetails } from './components/TaskDetails'
import { Footer } from './components/Footer'
import { PageTitle } from './components/PageTitle'

export const MainPage = () => {
  return (
    <main>
      <Header />
      <PageTitle />
      <div style={{ display: 'flex', gap: '30px' }}>
        <TaskList />
        <TaskDetails />
      </div>
      <Footer />
    </main>
  )
}
