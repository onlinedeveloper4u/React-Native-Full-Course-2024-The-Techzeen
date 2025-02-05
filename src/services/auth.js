import auth from '@react-native-firebase/auth'

export const registerUser = async (email, password) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password)
        await userCredential.user.sendEmailVerification()
        return userCredential.user
    } catch (error) {
        let errorMessage
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = 'This email is already in use. Please use a different email address'
                break
            case 'auth/invalid-email':
                errorMessage = 'Invalid Email Address'
                break
            case 'auth/weak-password':
                errorMessage = 'Password is too weak. Please use at least 6 characters'
                break
            default:
                errorMessage = 'An unknown error occurred'
                break
        }
        throw new Error(errorMessage)
    }
}

export const loginUser = async (email, password) => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password)
        const user = userCredential.user
        return {user, emailVerified: user.emailVerified}
    } catch (error) {
        let errorMessage
        switch (error.code) {
            case 'auth/invalid-credential':
                errorMessage = 'Incorrect Email/Password'
                break
            case 'auth/user-not-founf':
                errorMessage = 'No user found!'
                break
            default:
                errorMessage = 'An unknown error occurred'
        }
        throw new Error(errorMessage)
    }
}

export const sendPasswordResetEmail = async (email) => {
    try {
        await auth().sendPasswordResetEmail(email)
    } catch (error) {
        let errorMessage
        switch (error.code) {
            case 'auth/user-not-found':
                errorMessage = 'This user does not exist'
                break
            case 'auth/invalid-email':
                errorMessage = 'Invalid Email Address'
                break
            default:
                errorMessage = 'An unknown error occurred'
        }
        throw new Error(errorMessage)
    }
}