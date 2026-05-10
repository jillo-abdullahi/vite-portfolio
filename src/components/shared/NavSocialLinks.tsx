import { LinkedInBtn } from "../LinkedInBtn";
import { GithubBtn } from "./GithubBtn";

export const NavSocialLinks = () => (
  <div className="flex items-center space-x-2 h-full">
    <GithubBtn />
    <LinkedInBtn />
  </div>
);
