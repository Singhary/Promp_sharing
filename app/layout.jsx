import "@styles/global.css" ;

export const metadata = {
    title:"Promptipia",
    description:"Discover and share cool AI Prompt",
}
 
const RootLayout = ({children}) => {
  return (
    <html lang="en">
       <body>
          <div className="main">
            <div className="gradient"/>
          </div>
          
          <main className="app">
              {children}
          </main>

       </body>
    </html>
  )
}

export default RootLayout