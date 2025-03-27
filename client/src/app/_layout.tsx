import GlobalContextProvider from "../context/globalContext"
import Root from "./Root"

const RootLayout = () => {
    return (
      <GlobalContextProvider>
        <Root />
      </GlobalContextProvider>
    );
}
export default RootLayout
