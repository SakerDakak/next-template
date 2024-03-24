import { Contant } from "@/data/types/basic/contant";
import { SocialMedia } from "@/data/types/basic/socialmedia";

export default class InfoX {
  static readonly appName: string = process.env.APP_NAME || "APP NAME";
  static readonly appURL: string =
    process.env.HOST_URL || "http://localhost:3000";

  static readonly contant: Contant = {
    email: "",
    phone: [""],
    whatsapp: "",
    address: "",
    map: "",
  };

  static readonly socialMedia: SocialMedia = {
    facebook: "https://facebook.com/",
    snapchat: "https://snapchat.com/",
    instagram: "https://instagram.com/",
    xTwitter: "https://twitter.com/",
    youtube: "https://youtube.com/",
    linkdin: "https://linkdin.com/",
  };
}
