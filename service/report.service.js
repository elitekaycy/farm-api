import { Report } from "../models";

const USER_REPORT = 'USER'
const PURCHASE_REPORT = 'PURCHASE'
const SALES_REPORT = 'SALES'



async function createReport(report){

    // USER ID
    // REPORTED ID
    // REPORT TYPE
    // DESCRIPTION
    return await Report.create(report)


}

export default createReport