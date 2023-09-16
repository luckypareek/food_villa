import { useState } from "react"
const Section=({title,description , isVisible , setIsVisible , value})=>
{
  
   
    
    return(
        <div className="border m-5 p-2 border-black">
            <h1 className="text-xl font-bold">{title}</h1>
          {isVisible?
          <>
           <button className="underline"
            onClick={()=>setIsVisible("")}
            >Hide</button>
            <p>{description}</p>
            </>
             :
            <button className="underline"
            onClick={()=>setIsVisible(value)}
            >Show</button>
            }
           
          
        </div>
    )
}


const Instamart=()=>
{
   const [isDisplayed,setIsDisplayed]=useState()


    return(
        <>
        <Section title={"Instamart career"}  
        description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }
    isVisible={isDisplayed=="career"}
    setIsVisible={(value)=>setIsDisplayed(value)}
    value={"career"}
    
    />

    <Section title={"Instamart Products"}  description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }
    isVisible={isDisplayed=="Products"}
    setIsVisible={(value)=>setIsDisplayed(value)}
    value={"Products"}
    />

    <Section title={"Instamart Contacts"}  description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }
    isVisible={isDisplayed=="Contacts"}
    setIsVisible={(value)=>setIsDisplayed(value)}
    value={"Contacts"}
    />
    </>
    )
}


export default Instamart