import "@styles/global.css" ;
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
    title:"Promptipia",
    description:"Discover and share cool AI Prompt",
}
 
const RootLayout = ({children}) => {
  return (
    <html lang="en">
       <body>
         <Provider>
          <div className="main">
            <div className="gradient"/>
          </div>
          
          <main className="app">
            <Nav/>
              {children}
          </main>
         </Provider>
       </body>
    </html>
  )
}

export default RootLayout