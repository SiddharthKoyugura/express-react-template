import db from './index';

export const retrieveAllRecords = async () => {
    const records = await db.findMany();
    return records;
}