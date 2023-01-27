import { createGlobalStyle, ThemeProvider } from "styled-components"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import * as theme from './theme'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    display: flex;
    min-width: 320px;
    width: 100%;
    min-height: 100vh;
    color: #271b84;
    background-color: #e06c6c;

    #root {
      width: 100%;
    }
  }
`

function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Form />
      </ThemeProvider>
    </>
  )
}

export default App
