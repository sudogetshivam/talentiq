import { chatClient } from "../lib/streams.js";

export async function getStreamToken(req, res) {
    try {
        const clerkId = req.user.clerkId;
        const token = chatClient.createToken(clerkId);

        res.status(200).json({
            token,
            userId: clerkId,
            userName: req.user.name
        });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}