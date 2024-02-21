import admin from 'firebase-admin'
import { fireConfig } from './fireConfig'

try {
    admin.initializeApp({
        credential: admin.credential.cert(fireConfig),
    })
    console.log('Initialized successfully')
} catch (error) {
    if (!/already exists/u.test(error.message)) {
        console.log('Firebase admin initialization error', error.stack)
    }
}

export default admin