const lastRequestTimestamps = new Map();

export const rateLimiter = (key, windowMs = 1000)=> {
    return (req, res, next) => {
        const now = Date.now();
        const lastRequestTime = lastRequestTimestamps.get(key) ?? 0;

        if(now - lastRequestTime < windowMs) {
            return res.status(429).json({ error: 'Too many requests, please try again later.' });
        } 

        lastRequestTimestamps.set(key, now);
        next();
    };
};

