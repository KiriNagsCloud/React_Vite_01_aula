
import './App.module.css'
import { Btn } from './components/btn'
import { Menu } from './components/menu'

function App() {
  return (
    <>
    <Menu s1="salamaleico" s2="shadown" s3="linguangu"/>
      <main>
        <section id='s1'>
          primeira
          <Btn text = 'salamaleico' func="#s2" ></Btn>
        </section>
        <section id='s2'>
          segunda
          <Btn text = 'shadown' func="#s3"></Btn>
        </section>
        <section id='s3'>
          terceira
          <Btn text = 'linguangu' func="#s1"/>
          </section>
      </main>
    </>
  )
}

export default App
