
import './styles/global.css'
import './lib/dayjs'
import { Plus } from 'phosphor-react'
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'

//Dicas de Implementação

//Autenticação (Firebase, oAuth0)
//Notificações Push
//Perfil Publico com gráfico de resumo!

export function App() {

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>

        <Header />
        <SummaryTable />

      </div>
    </div>

  )
}


