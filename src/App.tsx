import { createGlobalStyle, ThemeProvider } from "styled-components"
import Footer from "./components/Footer/Footer"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import UserProvider from "./context/UserContext"
import * as theme from './theme'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    display: flex;
    min-width: 320px;
    width: 100%;
    min-height: 100vh;
    color: #271b84;
    background-color: #7a6363;

    #root {
      width: 100%;
    }
  }
`

function App() {

  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header />
          <Form />
        </ThemeProvider>
      </UserProvider>
      <Footer />
    </>
  )
}

export default App
