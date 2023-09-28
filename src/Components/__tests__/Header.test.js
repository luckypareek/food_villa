import Header from "../Header"
import {render} from "@testing-library/react"
import {Provider} from "react-redux"
import store from "../../utils/store"
import {StaticRouter, staticRouter} from "react-router-dom/server"


// test("Logo should load on rendering header",()=>{
 
//     const header = render(
//         <StaticRouter>
//     <Provider store={store}> <Header/>
//     </Provider>
//     </StaticRouter>
    
//     )
     
//    const logo=  header.getAllByTestId("logo")

//     console.log(logo)

//     expect(logo[0].src).toBe("dummy.png")
// })

test("online status should be displayed when online ",()=>{
 
    const header = render(
        <StaticRouter>
    <Provider store={store}> <Header/>
    </Provider>
    </StaticRouter>
    
    )
     
   const onlinestatus=  header.getByTestId("online-status")

    console.log(onlinestatus.innerHTML)
    expect(onlinestatus.innerHTML).toBe("Online")

   // expect(onlinestatus.innerHTML).toBe("Online")
})

test("Cart should have 0 items when header renders",()=>{
 
    const header = render(
        <StaticRouter>
    <Provider store={store}> <Header/>
    </Provider>
    </StaticRouter>
    
    )
     
   const cartItems=  header.getByTestId("cart-items")

    console.log(cartItems.innerHTML)
    expect(cartItems.innerHTML).toBe("0")

   // expect(onlinestatus.innerHTML).toBe("Online")
})


 