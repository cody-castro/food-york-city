import React from 'react';
import '../homepage.css'

class HomePage extends React.Component {


    
    
    
    search = (e) => {
        e.preventDefault()
        let restObj
        fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json').then(resp=>resp.json()).then(data => (restObj = data))
        console.log(restObj)
        return restObj
    }
    



/* https://data.cityofnewyork.us/resource/43nn-pn8j.json

function submitHandler(reviewObj){
    fetch('http://localhost:3000/ratings/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           accept: "application/json"
    },
        body: JSON.stringify(reviewObj)
        }).then(resp=>resp.json()).then(data => {
        console.log(data)
        if (data !== undefined){ 
          const newPopups = popups
          newPopups.ratings = [...newPopups.ratings, data]
          setShowPopup(newPopups)
          setReviewPage(false) 
        }
      })
}

*/

    render(){
    return(
        <>
        <div>
            <h1> Food York City</h1>
        </div>
        <div>
            <form onSubmit={this.search}>
                <input type="text" name="name" placeholder='Search for a Restaurant' />
                <input type="submit" value="Search" />
            </form>
        </div>
        </>
    )
    }
}


export default HomePage;