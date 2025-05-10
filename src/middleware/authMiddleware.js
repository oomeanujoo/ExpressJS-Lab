module.exports = (req, res, next) => {
    console.log('Checking authentication for session ID:', req.sessionID);
    console.log('Current session:', req.session);
    
    if (req.session.user) {
        console.log('User is authenticated:', req.session.user);
        return next(); // Proceed if user is authenticated
    } else {
        console.log('User not authenticated, redirecting to login.');
        return res.redirect('/api/auth/login'); // Redirect to login if not authenticated
    }
};
