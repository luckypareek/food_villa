import { StaticRouter } from "react-router-dom/server"
import Body from "../Body"
import {render,waitFor,fireEvent} from "@testing-library/react"
import store from "../../utils/store"
import { Provider } from "react-redux"
import {RESTAURANT_DATA} from "../../../mocks/data"
import "@testing-library/jest-dom"

global.fetch= jest.fn(()=>{
   return Promise.resolve({
        json: () => { return Promise.resolve(RESTAURANT_DATA)}
})

})

test("Shimmer on Home Page",()=>{
  
const body=render(
        <StaticRouter>
           <Provider store={store}>
            <Body/>
            </Provider>

        </StaticRouter>
      
        
    )

    console.log(body)
    const shimmer=body.getByTestId("shimmer")
    console.log(shimmer)

    expect(shimmer.children.length).toBe(10)



})


test("Restaurants on Home Page", async ()=>{
  
    const body=render(
            <StaticRouter>
               <Provider store={store}>
                <Body/>
                </Provider>
    
            </StaticRouter>
          )

        await waitFor(() => expect(body.getByTestId("search-btn")))
    
       // console.log(body)
        const resList=body.getByTestId("res-list")
        //console.log(resList)
        expect(resList.children.length).toBe(20)
    
        // expect(shimmer.children.length).toBe(10)
    })


    test("Search for String(pizza) on home page", async ()=>{
  
        const body=render(
                <StaticRouter>
                   <Provider store={store}>
                    <Body/>
                    </Provider>
        
                </StaticRouter>
              )
    
            await waitFor(() => expect(body.getByTestId("search-btn")))
        
           // console.log(body)
            const input=body.getByTestId("search-input")
            fireEvent.change(input,{target :{
                value:"pizza"
            }})
            const searchBtn=body.getByTestId("search-btn")
            fireEvent.click(searchBtn)
            
            const resList=body.getByTestId("res-list")
            expect(resList.children.length).toBe(2)
        
            // expect(shimmer.children.length).toBe(10)
        })