import Header from "../Header"
import {render} from "@testing-library/react"
import {Provider} from "react-redux"
import store from "../../utils/store"
import {StaticRouter, staticRouter} from "react-router-dom/server"


test("Logo should load on rendering header",()=>{
 
    const header = render(
        <StaticRouter>
    <Provider store={store}> <Header/>
    </Provider>
    </StaticRouter>
    
    )
     
   const logo=  header.getAllByTestId("logo")

    console.log(logo)

    expect(logo[0].src).toBe("dummy.png")
})