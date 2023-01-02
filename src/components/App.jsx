import React from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import notes from "../notes"


function App(){
    return <div>
        <Header />
        {notes.map( (noteItem) =>(
                 <Note key={noteItem.key} 
                title={noteItem.title} 
                description={noteItem.description}/>
                )
            )}
        <Footer />
    </div>
}

export default App;