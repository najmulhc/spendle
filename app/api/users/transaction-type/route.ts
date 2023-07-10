import { NextRequest, NextResponse } from "next/server";
import User from "@/models/UserModel";
const POST = async (req: NextRequest) => {
  const { username, type, text } = await req.json();
  const foundUser = await User.findOne({
    username,
  });
  if (type === "Gaining") {
    foundUser.gainingSources = [...foundUser.gainingSources, text];
  } else {
    foundUser.spendingSources = [...foundUser.spendingSources, text];
  }

  const updatedUser = await foundUser.save();

  return NextResponse.json({
    user: updatedUser,
  });
};

const PUT = async (req: NextRequest) => {
  try {
    const { username, type, text } = await req.json();
    console.log(username, type, text);
    const foundUser = await User.findOne({
      username,
    });
    if (type === "Gaining") {
      foundUser.gainingSources = foundUser.gainingSources.filter(
        (item: String) => item !== text
      );
    } else {
      foundUser.spendingSources = foundUser.spendingSources.filter(
        (item: String) => item !== text
      );
    }
 const updatedUser =   await foundUser.save();

    return NextResponse.json({
      user: updatedUser,
    });
  } catch (error: any) {
    return NextResponse.json({
      err: error.message,
    });
  }
};

export { POST, PUT };
