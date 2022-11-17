import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x0073C2da630cB10b93E7c8277A0cE185cbA4485e", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "MSDAO Membership Card NFT",
        description: "This NFT will give you access to MakerSapeins DAO!",
        image: readFileSync("scripts/assets/MS_MembershipNFT.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();