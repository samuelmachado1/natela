import { useState } from 'react'
import logo from './assets/logo.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='headerPage'>
        <div className='logoHeader'>
          <img id='logo' src={logo} className="logo" alt="logo" />
        </div>
      </div>
      <div className='subHeader'>
        <div className='texts-subHeader'>
          <text className='title-texts-subHeader'>Mostra Competitiva</text>
          <text className='subTitle-texts-subHeader'>A Mostra Competitiva Na Tela da Quebrada conta com 3 categorias e 3 diferentes valores de premiação.</text>
        </div>
        <div className='body'>
          <text className='title-texts-body'>Mostra Ponte</text>
          <section className='grid-videos'>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/a4CBi3D3N0Y" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Tá Fazendo Sabão</text>
                <text className='subTitle-video-subtitle'>Direção de: Ianca Oliveira</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Documentário, 2022</text>
                <text className='subTitle-video-subtitle'>Origem: Santo Amaro, BA</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/bky0b0u1aQ4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Noites em Claro</text>
                <text className='subTitle-video-subtitle'>Direção de: Elvis Alves</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Terror, 2022</text>
                <text className='subTitle-video-subtitle'>Origem: Fortaleza, CE</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/Z_WC6PTIbvY" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Arapuca</text>
                <text className='subTitle-video-subtitle'>Direção de: Joel Caetano</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Drama/Suspense</text>
                <text className='subTitle-video-subtitle'>Origem: São Paulo, SP</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/W5vt8u9yZwY" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Fluxo</text>
                <text className='subTitle-video-subtitle'>Direção de: Filipe Barbosa</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: São Paulo, SP</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/EneaDPmQvWo" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Capitão Tocha</text>
                <text className='subTitle-video-subtitle'>Direção de: Matheus Amorim</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção</text>
                <text className='subTitle-video-subtitle'>Origem: Recife, PE</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/YUtaK7Zh0p0" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Vão das Almas</text>
                <text className='subTitle-video-subtitle'>Direção de: Edileuza e Santiago</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção/ Terror, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: Brasília, DF</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/-rqp-WtCIWs" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Justa Causa</text>
                <text className='subTitle-video-subtitle'>Direção de: Ubirajara Gonçalves</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Animação/ficção 2023</text>
                <text className='subTitle-video-subtitle'>Origem: São Paulo, SP</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/_nXdvLPTBQA" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Das Águas</text>
                <text className='subTitle-video-subtitle'>Direção de: Adalberto e Tiago</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Documentário, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: Recife, PE</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/ps79szlBMN0" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Marinheiro Só</text>
                <text className='subTitle-video-subtitle'>Direção de: Caique Copque</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Experimental, 2022</text>
                <text className='subTitle-video-subtitle'>Origem: São Paulo, SP</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/gHGzuUFCT8k" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Quintal Verde</text>
                <text className='subTitle-video-subtitle'>Direção de: Felipe dos Santos</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Docuficção, 2021</text>
                <text className='subTitle-video-subtitle'>Origem: Recife, PE</text>
              </div>
            </div>
          </section>
          <text className='title-texts-body-II'>Mostra Caminho</text>
          <section className='grid-videos'>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/HyhvMemyc-c" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Sangue Entre As Pernas</text>
                <text className='subTitle-video-subtitle'>Direção de: Gisele Motta</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção, 2021</text>
                <text className='subTitle-video-subtitle'>Origem: Rio de Janeiro, RJ</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/w45Yo8Rb9sM" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Tereza de Benguela</text>
                <text className='subTitle-video-subtitle'>Direção de: Salles Fernandes</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: Sorriso, Mato Grosso</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/9HDWg15qMG4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Aquele Que Veio Do Oeste</text>
                <text className='subTitle-video-subtitle'>Direção de: Edileuza e Santiago</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção/ Terror, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: Brasília, DF</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/Nn1yvPWgRhA" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Ponto De Partida</text>
                <text className='subTitle-video-subtitle'>Direção De: Coraci Ruiz E Julio Matos</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Documentário</text>
                <text className='subTitle-video-subtitle'>Origem: Campinas, SP</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/TIOedKRrI54" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Se Os Tubarões Fossem Homens</text>
                <text className='subTitle-video-subtitle'>Direção de: Edileuza e Santiago</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção/ Terror, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: Brasília, DF</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/suB6ukI8pVw" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Chove Lá Fora</text>
                <text className='subTitle-video-subtitle'>Direção de: Mirela Kruel</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção / Drama</text>
                <text className='subTitle-video-subtitle'>Origem: Caxias do Sul, RS</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/Sicl-LT4d3A" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Eu Youtuber</text>
                <text className='subTitle-video-subtitle'>Direção de: Rodrigo Sena</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção</text>
                <text className='subTitle-video-subtitle'>Origem: NATAL, RN</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/PB9GoD6Z59Q" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Pedro</text>
                <text className='subTitle-video-subtitle'>Direção de: Leo Silva</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Dramaa</text>
                <text className='subTitle-video-subtitle'>Origem: Fortaleza, CE</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/qeWWoShXcYQ" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Cercas</text>
                <text className='subTitle-video-subtitle'>Direção De: Ismael Moura</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano:</text>
                <text className='subTitle-video-subtitle'>Origem: PB</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/6f09lJzpGKo" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Da Ponte Pra Cá</text>
                <text className='subTitle-video-subtitle'>Direção de: Isabela, Letícia E Mariana</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Documentário, 2022</text>
                <text className='subTitle-video-subtitle'>Origem: São Paulo, SP</text>
              </div>
            </div>
          </section>
          <text className='title-texts-body-III'>Mostra Video Clipes</text>
          <section className='grid-videos-II'>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/6csiWakgyPc" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Cara De Mau</text>
                <text className='subTitle-video-subtitle'>Direção de: Daniel e Fillipe</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: História/Romance, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: Brasília, DF</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/NC2V8RqPnVc" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Mais Um Soldado</text>
                <text className='subTitle-video-subtitle'>Direção de: Samuel Lima</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano:</text>
                <text className='subTitle-video-subtitle'>Origem: Rio de Janeiro, RJ</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/7NRt0l57lWI" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Navegar</text>
                <text className='subTitle-video-subtitle'>Direção de: Cauã Queiroz</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Musical, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: Santa Maria, DF</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/SaF6MUvTkM0" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Linha Do Trem</text>
                <text className='subTitle-video-subtitle'>Direção de: Vinício Sodré</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: 2023</text>
                <text className='subTitle-video-subtitle'>Origem: São Luís, MA</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/cFkvgCa0yEQ" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Bença</text>
                <text className='subTitle-video-subtitle'>Direção de: Mickaelly Moreira</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Drama, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: Mossoró, RN</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/suB6ukI8pVw" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Chove Lá Fora</text>
                <text className='subTitle-video-subtitle'>Direção de: Mirela Kruel</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção / Drama</text>
                <text className='subTitle-video-subtitle'>Origem: Caxias do Sul, RS</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/Sicl-LT4d3A" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Eu Youtuber</text>
                <text className='subTitle-video-subtitle'>Direção de: Rodrigo Sena</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção</text>
                <text className='subTitle-video-subtitle'>Origem: NATAL, RN</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/cwTXuuZ4soo" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Gueto</text>
                <text className='subTitle-video-subtitle'>Direção de: Hugho</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção/Videoclipe, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: S. José dos Campos, SP</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/FUT91M2J9nY" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Madame Do Réu</text>
                <text className='subTitle-video-subtitle'>Direção de: Anna Raquel e Jaísa</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Rap, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: Ipatinga, Minas Gerais</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/RoP4xfy6__0" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Música Clássica Do Subúrbio</text>
                <text className='subTitle-video-subtitle'>Direção de: Mirela Kruel</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Ficção / Drama</text>
                <text className='subTitle-video-subtitle'>Origem: Caxias do Sul, RS</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/8ihDkFu44iA" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Não Vou Ficar Louca</text>
                <text className='subTitle-video-subtitle'>Direção de: Rickson Melo</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Pop, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: São Luís, Maranhão</text>
              </div>
            </div>
            <div className='video-box-1'>
              <video className='video1' controls>
                <source src="https://youtu.be/XdbIWnvA340" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='video-subtitle'>
                <text className='title-video-subtitle'>Acorde</text>
                <text className='subTitle-video-subtitle'>Direção de: Taly Nayandra</text>
                <text className='subTitle-video-subtitle'>Gênero/Ano: Rock punk, 2023</text>
                <text className='subTitle-video-subtitle'>Origem: Amazonas</text>
              </div>
            </div>
          </section>
          <section className='form'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeq9iN8RUqRxfj8Cb_UcnEeX4-0hPjDjSb0cQ71GMLY6Ujt5g/viewform?embedded=true" width="360" height="740" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
