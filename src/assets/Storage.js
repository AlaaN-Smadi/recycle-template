import { Storage } from '@ionic/storage';

const store = new Storage();
let submissions = [];

const initStorage = async () => {
    await store.create();
}

const addNewSubmission = async (newSub) => {
    submissions.push(newSub);
    await store.set('submissions', submissions);
}

const getSubmissions = async () => {
    submissions = await store.get('submissions') || [];
    return submissions;
}

export const storageManager = {
    initStorage,
    addNewSubmission,
    getSubmissions,
}