import {createContext} from "react";
import { SearchProp } from "../../types";

const SEARCHCONTEXT = createContext("");

function searchContextProvider({children}: SearchProp) {
    return(
        <SEARCHCONTEXT.Provider value = {{...state, searchDispatch}}>
            {children}
        </SEARCHCONTEXT.Provider>
    )
}