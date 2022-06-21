import jwt from "jsonwebtoken";

const generateAuthToken = (user) =>{
    const jwtSecretKey = proces.env.SECRET_KEY;
    const token = jwt.sign(
        {
            _id: user._id,
            name:user.name,
            email:user.email
        },
        jwtSecretKey
    );

    return token
}

export default generateAuthToken;