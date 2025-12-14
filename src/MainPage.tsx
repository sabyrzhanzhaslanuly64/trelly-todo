import { Header } from './components/Header'
import { PageTitle } from './components/PageTitle'
import { TaskList } from './components/TaskList'
import { TaskDetails } from './components/TaskDetails'
import { Footer } from './components/Footer'

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
