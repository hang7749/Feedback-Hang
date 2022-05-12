import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

    return (
        <FeedbackProvider>
        <BrowserRouter>
                    <Header/>
                    <div className="container">
                        <Routes>
                            <Route exact path='/' element={ 
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }>
                            </Route>
                            
                            <Route path='/about' element={<AboutPage />} />
                        </Routes>

                    </div> 
                    <AboutIconLink />

        </BrowserRouter>
        </FeedbackProvider>
    )




    ///////////////////////////////////Contditional Case////////////////////////////
    // const title = 'This is title'
    // const body = 'This is body'
    // const comments = [
    //     {id:1 , text:'c1'},
    //     {id:2 , text:'c2'},
    //     {id:3 , text:'c3'},
    // ]

    // const loading = false
    // const showComments = true
    // const commentBlock = (
    //     <div className="comments">
    //         <Header />
    //         <h3>Comments: {comments.length}</h3>
    //         <ul>
    //             {comments.map((comments,index) => (
    //                 <li key={index}>{comments.id},{comments.text}</li>
    //             )
    //             )}
    //         </ul>
    //     </div>
    // )
    
    // if (loading) return <h1>Loading...</h1>

    // else return (
    // <div className="container">
    //     <h2>{title.toUpperCase()}</h2>
    //     <p>{body}</p>

    //     {showComments && commentBlock}
    // </div>
    // ) 

}


export default App

