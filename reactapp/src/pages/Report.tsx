import { REPORT_TITLE, SYSTEM_NAME } from "../config/constants"

const Report = () => {
    
    // Set title
    document.title =  REPORT_TITLE + ' | ' + SYSTEM_NAME

    return (
        <>
            <h1>Report</h1>
        </>
    )
}

export default Report
