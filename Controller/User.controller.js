import User from "../Model/User.js";

export const user = async(req,res) => {
    try {
        // Create a new user document using the User model
        const userDetails = new User(req.body);
        
        // Save the user document to the database
        await userDetails.save();
    
        // Respond with success message
        res.status(200).json({ message: 'User saved successfully' });
    } catch (error) {
        // Handle any errors that occur during saving
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'An error occurred while saving the user' });
    }
}