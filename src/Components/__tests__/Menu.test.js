import { StaticRouter } from "react-router-dom/server"
import Header from "../Header"
import {render,waitFor,fireEvent} from "@testing-library/react"
import store from "../../utils/store"
import { Provider } from "react-redux"
import {MENU_DATA, RESTAURANT_DATA} from "../../../mocks/data"
import "@testing-library/jest-dom"
import RestaurantMenu from "../RestautantMenu"

global.fetch= jest.fn(()=>{
   return Promise.resolve({
        json: () => { return Promise.resolve(MENU_DATA)}
})

})

test("Cart items count be should be updated ", async ()=>{
  
    const body=render(
            <StaticRouter>
               <Provider store={store}>
                <RestaurantMenu/>
                <Header/>
                </Provider>
    
            </StaticRouter>
          )

        await waitFor(() => expect(body.getByTestId("menu")))
        const addBtn=body.getAllByTestId("addBtn")
     
        fireEvent.click(addBtn[0])
        
       
        console.log(body.getByTestId("menu"))
        
        
        
        const cart=body.getByTestId("cart-items")
        expect(cart.innerHTML).toBe("1") 
    

    })