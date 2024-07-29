import mongoose, { Document, Model } from "mongoose";




export type UserType = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  profilePicture?: {
    public_Id: string;
    url: string;
  };
};


export type UserDocument = Document & UserType & {
  isPasswordMatch(password: string): Promise<boolean>;
}


export type UserModel = Model<UserDocument> & {
  isEmailTaken(
    email: string,
    excludeUserId?: mongoose.Types.ObjectId
  ): Promise<boolean>;
};


