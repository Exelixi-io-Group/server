import User from "../Model/User.js";

export const postUser = async(req,res) => {
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

export const getAllUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find();
        
        // Respond with the array of users
        res.status(200).json(users);
    } catch (error) {
        // Handle any errors that occur during fetching
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
}