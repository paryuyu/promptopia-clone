import { Nav } from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";


//metadata
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts"
}


//layout
const RootLayout = ({ children }) => {




  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>

  )
}

export default RootLayout;