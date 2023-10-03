import { Declaraciones } from "./Declaraciones"
import Emma from '../src/assets/testimonio-emma.png'
import Sarah from '../src/assets/testimonio-sarah.png'
import Shawn from '../src/assets/testimonio-shawn.png'
function App() {

  return (
    <>
      <Declaraciones 
      fondo={Shawn}
      nombre='Shawn Wang'
      pais='Singapur'
      cargo='Ingeniero de software'
      empresa='Amazon'
      texto = "Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando durante cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida . "
      />
      <Declaraciones 
      fondo={Sarah}
      nombre='Sara Chima'
      pais='Nigeria'
      cargo='Ingeniero de software'
      empresa='ChatDesk'
      texto = " freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación desde un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble"
      />
      <Declaraciones 
      fondo={Emma}
      nombre='Emma Bostian'
      pais='Suecia'
      cargo='Ingeniero de software'
      empresa='Spotify'
      texto = '"Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
      />
     
    </>
  )
}

export default App
