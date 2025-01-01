import { Request, Response } from "express";
import { clerkClient } from "../index";

// update user data
export const updateUser = async(
    req: Request,
    res: Response
): Promise<void> => {
    const { userId } = req.params;
    const { userData } = req.body; //param is more specific than .query as course needs id etc. than category
    try{
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                userType: userData.publicMetadata.userType,
                settings: userData.publicMetadata.settings
            }
        })

        res.json({message: "User update success"});
    } catch(error) {
        res.status(500).json({message: "Error updating user", error});
    }
};