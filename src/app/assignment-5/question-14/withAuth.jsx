import { redirect } from "next/navigation"

const withAuth = (Component) => (props) =>{

    const authenticated = true
    if(!authenticated){
       redirect('/assignment-5/question-14/login')
    }
    return <Component {...props} />
}

export default withAuth