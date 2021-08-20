import cancer from "../models/bestiarySchema.js";

export const getBestiary = async (req, res) => {
    try {
        const Messages = await cancer.find({});
        console.log(Messages);
        res.status(200).json(Messages);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// export const createBestiaryEntry = (req, res) => {
//     const post = req.body;

//     const newPost = new entrySchema(post);


//     try {
//         await newPost.save();
//         res.status(201).json(newPost);

//     } catch (error) {
//         res.status(409).json({message: error.message})
//     }
//}