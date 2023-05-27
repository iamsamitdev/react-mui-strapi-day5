import { SYSTEM_NAME, DASHBOARD_TITLE } from '../config/constants'

const Dashboard = () => {

    // Set title
    document.title =  DASHBOARD_TITLE + ' | ' + SYSTEM_NAME

    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}

export default Dashboard