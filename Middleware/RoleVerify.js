const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;
    console.log('user role', userRole)

    if (!userRole) {
      return res.status(401).json({ error: "No role found in token." });
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: "Access denied: You don't have permission." });
    }

    next(); 
  };
};

module.exports = checkRole;
