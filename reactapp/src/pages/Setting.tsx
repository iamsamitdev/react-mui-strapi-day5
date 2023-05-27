import { SETTING_TITLE, SYSTEM_NAME } from "../config/constants"

const Setting = () => {

    // Set title
    document.title =  SETTING_TITLE + ' | ' + SYSTEM_NAME

    return (
        <>
            <h1>Setting</h1>
        </>
    )
}

export default Setting
